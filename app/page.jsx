import './page.css';

export default function Overview() {
  const stats = [
    { label: 'DOCUMENTOS', value: '1,284', change: '+32%', icon: '📄', color: '#ff6b35' },
    { label: 'PEDIDOS PENDENTES', value: '14', change: '+5%', icon: '📋', color: '#ff9500' },
    { label: 'DEPARTAMENTOS', value: '12', change: '0%', icon: '🏢', color: '#2196f3' },
    { label: 'UTILIZADORES', value: '48', change: '-2%', icon: '👥', color: '#9c27b0' },
  ];

  const recentDocuments = [
    { name: 'Relatório Financeiro Q3', category: 'FINANCEIRO', dept: 'Administração', status: 'CONCLUÍDO' },
    { name: 'Manual do Colaborador', category: 'RH', dept: 'Recursos Humanos', status: 'PENDENTE' },
    { name: 'Contrato Prestação de Serviços', category: 'JURÍDICO', dept: 'Legal', status: 'CONCLUÍDO' },
    { name: 'Project Specification v2', category: 'TI', dept: 'Desenvolvimento', status: 'REVISÃO' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Resumo do sistema e atividade recente.</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-header">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-icon" style={{ color: stat.color }}>{stat.icon}</span>
            </div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-change" style={{ color: stat.color }}>
              {stat.change}
            </div>
            <div className="stat-bar" style={{ backgroundColor: stat.color }}></div>
          </div>
        ))}
      </div>

      <div className="content-section">
        <h2>Documentos Recentes</h2>
        <table className="documents-table">
          <thead>
            <tr>
              <th>NOME DO ARQUIVO</th>
              <th>CATEGORIA</th>
              <th>DEPARTAMENTO</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {recentDocuments.map((doc, index) => (
              <tr key={index}>
                <td>
                  <div className="document-name">
                    <span className="doc-icon">📄</span>
                    {doc.name}
                  </div>
                </td>
                <td>{doc.category}</td>
                <td>{doc.dept}</td>
                <td>
                  <span className={`status-badge status-${doc.status.toLowerCase()}`}>
                    {doc.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
