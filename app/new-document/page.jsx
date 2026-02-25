'use client'
import "./page.css";
import PageHeader from "@/components/ui-components/PageHeader";
import FormActions from "@/components/ui-components/formActions";
import { useRef, useState } from "react";
import { useFormState } from "react-dom";
import { createDocument } from "@/lib/actions";

export default function NewDocument() {

  const [formState, formAction ] = useFormState(createDocument, {error: null, message: null});

  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();

  function handleFileInputClick(e) {
    fileInputRef.current.click();
  }

  async function handleFileChange(e) {
    const file = await e.target.files[0];
    
    if (!file){
      return;
    }

    const fileData = {
      name: file.name.split('.').slice(0, -1).join('.'),
      extension: file.name.split('.').pop(),
      size: file.size,
    };

   

    setSelectedFile(fileData);
  }

  return (
    <main>
      <PageHeader
        title="Novo Documento"
        description="Adicione um novo documento no sistema."
      />
      <div className="content-section">
        <form action={formAction} className="form">
          <div className="form-inputs">
            <div className="form-inputs--box">
              <div className="form-group">
                <label htmlFor="docName">Nome do Documento</label>
                <input
                  type="text"
                  id="docName"
                  name="docName"
                  placeholder="Digite o nome do documento"
                  defaultValue={selectedFile?.name}
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

            <div className="input-image" onClick={handleFileInputClick}>
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
                ref={fileInputRef}
                type="file"
                id="file-upload"
                name="fileUpload"
                className="file-upload-input"
                onChange={handleFileChange}
                required
              />
            </div>
            <div className="selected-file">
                {selectedFile ? (
                  <span>Arquivo selecionado: <strong>{selectedFile.name}.{selectedFile.extension} - ({(selectedFile.size / 1024).toFixed(2)} KB)</strong></span>
                ) : (
                  <span>Nenhum arquivo selecionado</span>
                )}
            </div>

          </div>
          <br />
          <FormActions />
        </form>
      </div>
    </main>
  );
}
