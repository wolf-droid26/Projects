const fs = require("node:fs/promises");
const path = require("node:path");

const root = process.cwd();
const src = path.join(root, "src");

const dirsToRemove = [
  "modules/administracion/notificaiones",
  "modules/operaciones/tranferencias",
  "modules/seguridad/permisos/service",
];

const filesToRemove = [
  "modules/operaciones/operaciones/components/OperacionService.ts",
  "modules/auth/sesion/interfaces/Session.ts",
];

const duplicateServices = [
  "modules/administracion/configuracion/services/configuracion.service.ts",
  "modules/administracion/dashboard/services/dashboard.service.ts",
  "modules/auditoria/auditoria/services/auditoria.service.ts",
  "modules/auditoria/reportes/services/reporte.service.ts",
  "modules/auth/login/services/Login.service.ts",
  "modules/auth/recuperacion-password/services/Recuperacion-password.service.ts",
  "modules/auth/sesion/services/Sesion.service.ts",
  "modules/caja/aperturacaja/services/aperturaCaja.service.ts",
  "modules/caja/caja/services/caja.service.ts",
  "modules/caja/cierrecaja/services/cierrecaja.service.ts",
  "modules/caja/movimientoscaja/services/moviminetocaja.service.ts",
  "modules/clientes/clientes/services/cliente.service.ts",
  "modules/finanzas/bancos/services/banco.service.ts",
  "modules/finanzas/cuentasbancarias/services/cuentabancaria.service.ts",
  "modules/finanzas/monedas/services/moneda.service.ts",
  "modules/finanzas/tipos-cambio/services/tipoCambio.service.ts",
  "modules/operaciones/compras/services/compra.service.ts",
  "modules/operaciones/comprobantes/services/comprobante.service.ts",
  "modules/operaciones/operaciones/services/operacion.service.ts",
  "modules/operaciones/transferencias/services/transferencia.service.ts",
  "modules/operaciones/ventas/services/venta.service.ts",
  "modules/seguridad/bitacora/services/bitacora.service.ts",
  "modules/seguridad/perfil/services/perfil.service.ts",
  "modules/seguridad/roles/services/rol.service.ts",
  "modules/seguridad/usuarios/services/usuario.service.ts",
];

const renameDirs = [
  "modules/clientes/clientes/Interfaces",
  "modules/finanzas/monedas/Interfaces",
  "modules/finanzas/tipos-cambio/Interfaces",
];

async function exists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function removeDirSafe(relativePath) {
  const targetPath = path.join(src, relativePath);

  if (!(await exists(targetPath))) {
    console.log("Not found (skip):", targetPath);
    return;
  }

  console.log("Removing directory:", targetPath);
  await fs.rm(targetPath, { recursive: true, force: true });
}

async function removeFileSafe(relativePath) {
  const targetPath = path.join(src, relativePath);

  if (!(await exists(targetPath))) {
    console.log("Not found (skip):", targetPath);
    return;
  }

  console.log("Removing file:", targetPath);
  await fs.unlink(targetPath);
}

async function moveFile(sourceRelativePath, destinationRelativePath) {
  const from = path.join(src, sourceRelativePath);
  const to = path.join(src, destinationRelativePath);
  const toDir = path.dirname(to);

  if (!(await exists(from))) {
    console.log("Source not found (skip move):", from);
    return false;
  }

  await fs.mkdir(toDir, { recursive: true });

  console.log("Moving file:", from, "->", to);
  await fs.rename(from, to);

  return true;
}

async function renameCaseSensitive(directoryRelativePath) {
  const directoryPath = path.join(src, directoryRelativePath);

  if (!(await exists(directoryPath))) {
    console.log("Not found (skip rename):", directoryPath);
    return;
  }

  const parentPath = path.dirname(directoryPath);
  const targetPath = path.join(
    parentPath,
    path.basename(directoryPath).toLowerCase()
  );

  if (directoryPath === targetPath) {
    console.log("Already correct case:", directoryPath);
    return;
  }

  const tempPath = path.join(
    parentPath,
    `${path.basename(directoryPath)}.tmp_${Date.now()}`
  );

  console.log("Renaming:", directoryPath, "->", tempPath, "->", targetPath);

  await fs.rename(directoryPath, tempPath);
  await fs.rename(tempPath, targetPath);
}

async function main() {
  console.log("--- START cleanup script ---");

  for (const directory of dirsToRemove) {
    await removeDirSafe(directory);
  }

  const movedPerfilService = await moveFile(
    "modules/seguridad/perfil/service/perfilService.ts",
    "modules/seguridad/perfil/services/perfilService.ts"
  );

  if (movedPerfilService) {
    await removeDirSafe("modules/seguridad/perfil/service");
  }

  for (const file of filesToRemove) {
    await removeFileSafe(file);
  }

  for (const file of duplicateServices) {
    await removeFileSafe(file);
  }

  for (const directory of renameDirs) {
    await renameCaseSensitive(directory);
  }

  console.log("--- DONE cleanup script ---");
}

main().catch((error) => {
  console.error("Error during cleanup:", error);
  process.exitCode = 1;
});