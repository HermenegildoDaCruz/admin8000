import './page.css'
import ClientForm from '@/components/ui-components/ClientForm'
import FormInputs from '@/components/ui-components/FormInputs'
import FormActions from '@/components/ui-components/FormActions'
export default function DocumentPage(){
    return (
        <div className="document-page">
            <div className="grid grid-2">
                {/* <ClientForm className="form edit-form">
                    <h2>Informações gerais</h2>
                    <FormInputs categories={[]}/>
                    <FormActions/>
                </ClientForm> */}
                <div className="document-details">
                    <h3>Detalhes</h3>
                    <ul className="document-details-list">
                        <li>
                            <span className="detail-label">Criado por</span>
                            <span>Hopson</span>
                        </li>
                        <li>
                            <span className="detail-label">Criado em</span>
                            <span>2024-06-15</span>
                        </li>
                        <li>
                            <span className="detail-label">Última modificação</span>
                            <span>2024-06-20</span>
                        </li>
                        <li>
                            <span className="detail-label">Status</span>
                            <span>Pendente</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}