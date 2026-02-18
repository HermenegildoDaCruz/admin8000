import './page.css';

const bgTransparency = 0.2
export default function Overview() {
  const stats = [
    { label: 'DOCUMENTOS', value: '1,284', change: '+32%', iconName: 'document-text-outline', color: '#ff6b35', backgroundColor: `rgba(255, 107, 53, ${bgTransparency})` },
    { label: 'PEDIDOS PENDENTES', value: '14', change: '+5%', iconName: 'document-lock-outline', color: '#ff9500', backgroundColor:`rgba(255, 149, 0, ${bgTransparency})`},
    { label: 'DEPARTAMENTOS', value: '12', change: '0%', iconName: 'business-outline', color: '#2196f3', backgroundColor:`rgba(33, 149, 243, ${bgTransparency})`},
    { label: 'UTILIZADORES', value: '48', change: '-2%', iconName: 'people-outline', color: '#9c27b0', backgroundColor: `rgba(155, 39, 176, ${bgTransparency})`},
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
        <h1>Visão geral</h1>
        <p>Resumo do sistema e atividade recente.</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-header">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-icon" style={{ color: stat.color, backgroundColor: stat.backgroundColor }}><ion-icon name={stat.iconName} className="icon"></ion-icon></span>
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
        <h2>
           <span><ion-icon name="time-outline" className="icon"></ion-icon></span>
           <span>Adicionados recentemente</span>
        </h2>
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
                    <ion-icon name="document-text" className="icon"></ion-icon>
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
