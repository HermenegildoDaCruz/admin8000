import './page.css'
import DocumentsTable from '@/components/ui-components/DocumentsTable'
import { getDocuments } from '@/lib/actions'

export default async function DocumentsPage(){
    const documents = await getDocuments()
    return (
        <main>
        <div className="content-section">
        <h2>
           <span><ion-icon name="time-outline" className="icon"></ion-icon></span>
           <span>Documentos</span>
        </h2>
        <DocumentsTable documents={documents}/>
      </div>
        </main>
    )
}