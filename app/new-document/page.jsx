import "./page.css";
import PageHeader from "@/components/ui-components/PageHeader";

export default function NewDocument() {
  return (
    <main>
      <PageHeader
        title="Novo Documento"
        description="Adicione um novo documento no sistema."
      />
      <div className="content-section">
        <form action="" className="form">
          <div className="form-inputs">
            <div className="form-inputs--box">
              <div className="form-group">
                <label htmlFor="docName">Nome do Documento</label>
                <input
                  type="text"
                  id="docName"
                  name="docName"
                  placeholder="Digite o nome do documento"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Categoria</label>
                <select id="category" name="category" required>
                  <option value="">Selecione uma categoria</option>
                  <option value="financeiro">Financeiro</option>
                  <option value="juridico">Jurídico</option>
                  <option value="rh">Recursos Humanos</option>
                  <option value="ti">Tecnologia da Informação</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Descrição</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Descreva o documento"
                ></textarea>
              </div>
            </div>

            <div className="input-image">
              <div className="input-image-box">
                <span>
                  <ion-icon
                    name="cloud-upload-outline"
                    className="icon"
                  ></ion-icon>
                </span>
                <span>Clique para selecionar um arquivo</span>
              </div>

              <input
                type="file"
                id="file-upload"
                name="fileUpload"
                className="file-upload-input"
                required
              />
            </div>
          </div>
          <br />
          <div className="form-actions">
            <button type="button" className="btn">
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              Adicionar Documento
            </button>
            </div>
        </form>
      </div>
    </main>
  );
}
