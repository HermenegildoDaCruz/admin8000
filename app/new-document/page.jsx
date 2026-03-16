import "./page.css";
import PageHeader from "@/components/ui-components/PageHeader";
import FormActions from "@/components/ui-components/FormActions";
import ClientForm from "@/components/ui-components/ClientForm";
import FormInputs from "@/components/ui-components/FormInputs";
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
          <FormInputs categories={categories} />
          <br />
          <FormActions />
        </ClientForm>
      </div>
    </main>
  );
}
