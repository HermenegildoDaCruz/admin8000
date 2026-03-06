import './page.css';
import Link from 'next/link';
import PageHeader from '@/components/ui-components/PageHeader';
import { getDocuments } from '@/lib/actions';
const bgTransparency = 0.2

export default async function Overview() {
  const documents = await getDocuments()
  const stats = [
    { label: 'DOCUMENTOS', value: documents.length, change: '+32%', iconName: 'document-text-outline', color: '#ff6b35', backgroundColor: `rgba(255, 107, 53, ${bgTransparency})` },
    { label: 'PEDIDOS PENDENTES', value: '14', change: '+5%', iconName: 'document-lock-outline', color: '#ff9500', backgroundColor:`rgba(255, 149, 0, ${bgTransparency})`},
    { label: 'DEPARTAMENTOS', value: '12', change: '0%', iconName: 'business-outline', color: '#2196f3', backgroundColor:`rgba(33, 149, 243, ${bgTransparency})`},
    { label: 'UTILIZADORES', value: '48', change: '-2%', iconName: 'people-outline', color: '#9c27b0', backgroundColor: `rgba(155, 39, 176, ${bgTransparency})`},
  ];

  return (
    <main className="dashboard">
      <PageHeader title="Visão Geral" description="Resumo do sistema e atividade recente." />

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
              <th>ID</th> 
              <th>NOME DO ARQUIVO</th>
              <th>DEPARTAMENTO</th>
              <th>VISUALIZAR</th>
            </tr>
          </thead>
          <tbody>
            {documents?.map((doc) => (
              <tr key={doc.id_document}>
                <td>
                  <Link href="">
                    {doc.id_document}
                  </Link>
                </td>
                <td>
                  <div className="document-name">
                    <ion-icon name="document-text" className="icon"></ion-icon>
                    {doc.title}
                  </div>
                </td>
                <td>CATEGORY</td>
                <td>
                  <Link href={doc.link} target='_blank'>
                     {/* className={`status-badge status-${doc.status.toLowerCase()}`} */}
                    Ver
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
