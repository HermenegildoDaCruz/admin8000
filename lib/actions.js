"use server";
import db from "@/db-connection";
import fs from "fs";
import slugify from "slugify";
import { revalidatePath } from "next/cache";

export async function createDocument(state, formData) {
  const title = formData.get("title");
  const category = formData.get("category");
  const categoryId = db
    .prepare(`SELECT id_category FROM Category WHERE category_name = ?`)
    .get(category)?.id_category;
  const description = formData.get("description");
  const file = formData.get("fileUpload");
  const fileExtension = file.name.split(".").pop().toLowerCase();
  const currentDate = new Date().toISOString().slice(0, 19).replace("T", " ");

  if (!title || !categoryId || !description || !file) {
    return {
      error: true,
      message: "Todos os campos são obrigatórios.",
    };
  }

  if (title.length > 30) {
    return {
      error: true,
      message: "O título deve ter no máximo 30 caracteres.",
    };
  }

  if (file.size > 5 * 1024 * 1024) {
    return {
      error: true,
      message: "O arquivo deve ser menor que 2MB.",
    };
  }

  if (!["pdf", "docx", "xlsx"].includes(fileExtension)) {
    return {
      error: true,
      message: "Apenas arquivos PDF, DOCX e XLSX são permitidos.",
    };
  }

  const fileName = `${slugify(title, { lower: true }).replace(/\s+/g, "-").toLowerCase()}.${fileExtension}`;
  const bufferedFile = await file.arrayBuffer();
  const stream = fs.createWriteStream(`public/documents/${fileName}`);
  try {
    stream.write(Buffer.from(bufferedFile), (error) => {
      if (error) {
        throw new Error("Saving file failed");
      }
    });
  } catch (error) {
    return {
      error: true,
      message: error.message,
    };
  }

  const link = `/documents/${fileName}`;

  const newDoc = {
    title,
    description,
    createdAt: currentDate,
    updatedAt: currentDate,
    link,
    id_category: categoryId,
    id_user: 1,
  };

  console.log(newDoc);

  // db.prepare(
  //   `INSERT INTO Document (title, description, created_at, updated_at, link, id_category, id_user) VALUES (?, ?, ?, ?, ?, ?, ?)`,
  // ).run(
  //   newDoc.title,
  //   newDoc.description,
  //   newDoc.createdAt,
  //   newDoc.updatedAt,
  //   newDoc.link,
  //   newDoc.id_category,
  //   newDoc.id_user,
  // );
  // db.prepare(`INSERT INTO Document (title, description, created_at, updated_at, link, id_category, id_user) VALUES (?, ?, ?, ?, ?, ?, ?)`).run(
  //   newDoc.title,
  //   newDoc.description,
  //   newDoc.createdAt,
  //   newDoc.updatedAt,
  //   newDoc.link,
  //   newDoc.id_category,
  //   newDoc.id_user,
  // );

  revalidatePath('/');
  // revalidatePath('/documents');


}

export async function getCategories() {
  const categories = db.prepare("SELECT category_name FROM Category").all();
  return categories;
}
