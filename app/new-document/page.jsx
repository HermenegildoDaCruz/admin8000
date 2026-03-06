import "./page.css";
import PageHeader from "@/components/ui-components/PageHeader";
import FormActions from "@/components/ui-components/FormActions";
import SelectCategory from "@/components/ui-components/SelectCategory";
import FileInput from "@/components/ui-components/FileInput";
import ClientForm from "@/components/ui-components/ClientForm";
import { createDocument, getCategories, getUsers} from "@/lib/actions";

export default async function NewDocument() {
  const categories = await getCategories();
  return (
    <main>
      <PageHeader
        title="Novo Documento"
        description="Adicione um novo documento no sistema."
      />
      <div className="content-section">
        <ClientForm action={createDocument} className="form">
          <div className="form-inputs">
            <div className="form-inputs--box">
              <div className="form-group">
                <label htmlFor="docName">Nome do Documento</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Digite o nome do documento"
                  // defaultValue={selectedFile?.name}
                  maxLength={30}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Categoria</label>
                <SelectCategory name="category" categories={categories}/>
              </div>
              <div className="form-group">
                <label htmlFor="description">Descrição</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Descreva o documento"
                  required
                ></textarea>
              </div>
            </div>
            <FileInput name="fileUpload" />
          </div>
          <br />
          <FormActions />
        </ClientForm>
      </div>
    </main>
  );
}
