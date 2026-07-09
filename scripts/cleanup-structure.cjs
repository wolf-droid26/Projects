const fs = require('fs').promises;
const path = require('path');

const root = process.cwd();
const src = path.join(root, 'src');

const dirsToRemove = [
  'modules/administracion/notificaiones',
  'modules/operaciones/tranferencias',
  'modules/seguridad/permisos/service'
];

const filesToRemove = [
  'modules/operaciones/operaciones/components/OperacionService.ts',
  'modules/auth/sesion/interfaces/Session.ts'
];

const duplicateServices = [
  'modules/administracion/configuracion/services/configuracion.service.ts',
  'modules/administracion/dashboard/services/dashboard.service.ts',
  'modules/auditoria/auditoria/services/auditoria.service.ts',
  'modules/auditoria/reportes/services/reporte.service.ts',
  'modules/auth/login/services/Login.service.ts',
  'modules/auth/recuperacion-password/services/Recuperacion-password.service.ts',
  'modules/auth/sesion/services/Sesion.service.ts',
  'modules/caja/aperturacaja/services/aperturaCaja.service.ts',
  'modules/caja/caja/services/caja.service.ts',
  'modules/caja/cierrecaja/services/cierrecaja.service.ts',
  'modules/caja/movimientoscaja/services/moviminetocaja.service.ts',
  'modules/clientes/clientes/services/cliente.service.ts',
  'modules/finanzas/bancos/services/banco.service.ts',
  'modules/finanzas/cuentasbancarias/services/cuentabancaria.service.ts',
  'modules/finanzas/monedas/services/moneda.service.ts',
  'modules/finanzas/tipos-cambio/services/tipoCambio.service.ts',
  'modules/operaciones/compras/services/compra.service.ts',
  'modules/operaciones/comprobantes/services/comprobante.service.ts',
  'modules/operaciones/operaciones/services/operacion.service.ts',
  'modules/operaciones/transferencias/services/transferencia.service.ts',
  'modules/operaciones/ventas/services/venta.service.ts',
  'modules/seguridad/bitacora/services/bitacora.service.ts',
  'modules/seguridad/perfil/services/perfil.service.ts',
  'modules/seguridad/roles/services/rol.service.ts',
  'modules/seguridad/usuarios/services/usuario.service.ts'
];

const renameDirs = [
  'modules/clientes/clientes/Interfaces',
  'modules/finanzas/monedas/Interfaces',
  'modules/finanzas/tipos-cambio/Interfaces'
];

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch (e) {
    return false;
  }
}

async function removeDirSafe(rel) {
  const p = path.join(src, rel);
  if (await exists(p)) {
    console.log('Removing directory:', p);
    await fs.rm(p, { recursive: true, force: true });
  } else {
    console.log('Not found (skip):', p);
  }
}

async function removeFileSafe(rel) {
  const p = path.join(src, rel);
  if (await exists(p)) {
    console.log('Removing file:', p);
    await fs.unlink(p);
  } else {
    console.log('Not found (skip):', p);
  }
}

async function moveFile(srcRel, destRel) {
  const from = path.join(src, srcRel);
  const toDir = path.join(src, path.dirname(destRel));
  const to = path.join(src, destRel);
  if (!(await exists(from))) {
    console.log('Source not found (skip move):', from);
    return false;
  }
  await fs.mkdir(toDir, { recursive: true });
  console.log('Moving file:', from, '->', to);
  await fs.rename(from, to);
  return true;
}

async function renameCaseSensitive(dirRel) {
  const dir = path.join(src, dirRel);
  if (!(await exists(dir))) {
    console.log('Not found (skip rename):', dir);
    return;
  }
  const parent = path.dirname(dir);
  const target = path.join(parent, path.basename(dir).toLowerCase());

  if (dir === target) {
    console.log('Already correct case:', dir);
    return;
  }

  // On case-insensitive FS (Windows) we need a temp name
  const temp = path.join(parent, path.basename(dir) + '.tmp_delete_me_' + Date.now());
  console.log('Renaming', dir, '->', temp, '->', target);
  await fs.rename(dir, temp);
  await fs.rename(temp, target);
}

(async () => {
  try {
    console.log('--- START cleanup script ---');

    // 1. Remove directories
    for (const d of dirsToRemove) {
      await removeDirSafe(d);
    }

    // 2. Move perfilService.ts then remove old folder
    const perfilSrcRel = 'modules/seguridad/perfil/service/perfilService.ts';
    const perfilDestRel = 'modules/seguridad/perfil/services/perfilService.ts';
    const moved = await moveFile(perfilSrcRel, perfilDestRel);
    if (moved) {
      const oldFolder = path.join(src, 'modules/seguridad/perfil/service');
      if (await exists(oldFolder)) {
        console.log('Removing old folder:', oldFolder);
        await fs.rm(oldFolder, { recursive: true, force: true });
      }
    }

    // 3. Remove misplaced files
    for (const f of filesToRemove) {
      await removeFileSafe(f);
    }

    // 4. Remove duplicate .service.ts files
    for (const f of duplicateServices) {
      await removeFileSafe(f);
    }

    // 5. Rename Interfaces -> interfaces
    for (const d of renameDirs) {
      await renameCaseSensitive(d);
    }

    console.log('--- DONE cleanup script ---');
    process.exit(0);
  } catch (err) {
    console.error('Error during cleanup:', err);
    process.exit(2);
  }
})();
