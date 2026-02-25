"use server";
import db from "@/initdb";
import { revalidatePath } from "next/cache";

// ACTIONS
export async function createDocument(state, formData) {
  const docName = formData.get("docName");
  const category = formData.get("category");
  const description = formData.get("description");
  const file = formData.get("fileUpload");

  if (!docName || !category || !description || !file) {
    //   throw new Error('Todos os campos são obrigatórios.');
    return {
      error: true,
      message: "Todos os campos são obrigatórios.",
    };
  }

  if (file.size > 5 * 1024 * 1024) {
    // throw new Error('O arquivo deve ser menor que 2MB.');
    return {
      error: true,
      message: "O arquivo deve ser menor que 2MB.",
    };
  }

//   Verificar a extensão do arquivo, por exemplo, permitir apenas PDF, DOCX, etc.
  
//   Estruturar bem depois para salvar no banco de dados, por enquanto só loga no console
  const newDoc = {
    name: docName,
    category,
    description,
    fileName: file.name,
    fileSize: file.size,
    createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
  };

  console.log("Novo documento criado:", newDoc);


//    await new Promise(resolve => setTimeout(resolve, 6000));

  // await db.documents.add(newDoc);
  // revalidatePath('/documents');
}
