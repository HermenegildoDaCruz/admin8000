import Link from "next/link"

export default function DocumentsTable({documents}){
    // Manage filters
    return (
        <table className="documents-table">
          <thead>
            <tr>
              <th>ID</th> 
              <th>NOME DO ARQUIVO</th>
              <th>DEPARTAMENTO</th>
              <th>DATA DE CRIAÇÃO</th>
              <th>ÚLTIMA ATUALIZAÇÃO</th>
              <th>VISUALIZAR</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id_document}>
                <td>
                  <Link href={`documents/${doc.id_document}`}>
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
                <td>{doc.created_at}</td>
                <td>{doc.updated_at}</td>
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
    )
}