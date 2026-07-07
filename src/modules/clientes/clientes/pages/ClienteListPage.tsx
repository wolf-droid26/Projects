export const ClienteListPage = () => {
  const container = { padding: 20 } as const;
  const card = { padding: 16, borderRadius: 10, background: "#071027", color: "#e6eef8", boxShadow: "0 6px 18px rgba(2,4,12,0.5)" } as const;
  const tableStyle = { width: "100%", borderCollapse: "collapse", marginTop: 12 } as const;
  const thTd = { padding: 10, textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.04)" } as const;

  const sample = [
    { id: "1", tipo: "DNI", numero: "12345678", nombres: "María", apellidos: "Pérez", correo: "maria.perez@example.com" },
    { id: "2", tipo: "RUC", numero: "20123456789", nombres: "Empresa SAC", apellidos: "", correo: "contacto@empresa.com" },
  ];

  return (
    <div style={container}>
      <div style={card}>
        <div style={{ fontSize: 18, fontWeight: 700 }}>Clientes</div>
        <div style={{ fontSize: 12, color: "#9fb3c8", marginTop: 6 }}>
          📌 GUÍA DEL EQUIPO: Este componente pertenece al Módulo de Clientes. Aquí se debe programar la tabla real, los filtros de búsqueda por DNI/RUC y el botón para registrar nuevos clientes.
        </div>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTd}>Tipo</th>
              <th style={thTd}>Documento</th>
              <th style={thTd}>Nombres</th>
              <th style={thTd}>Correo</th>
            </tr>
          </thead>
          <tbody>
            {sample.map((c) => (
              <tr key={c.id}>
                <td style={thTd}>{c.tipo}</td>
                <td style={thTd}>{c.numero}</td>
                <td style={thTd}>{c.nombres} {c.apellidos}</td>
                <td style={thTd}>{c.correo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
