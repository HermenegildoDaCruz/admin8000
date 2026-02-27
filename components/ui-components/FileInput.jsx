'use client';
import { useRef, useState } from "react";

export default function FileInput({ name }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();

  function handleFileInputClick(e) {
    fileInputRef.current.click();
  }

  async function handleFileChange(e) {
    const file = await e.target.files[0];

    if (!file) {
      return;
    }

    const fileData = {
      name: file.name.split(".").slice(0, -1).join("."),
      extension: file.name.split(".").pop(),
      size: file.size,
    };

    setSelectedFile(fileData);
  }

  return (
    <>
      <div className="input-image" onClick={handleFileInputClick}>
        <div className="input-image-box">
          <span>
            <ion-icon name="cloud-upload-outline" className="icon"></ion-icon>
          </span>
          <span>Clique para selecionar um arquivo</span>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          id="file-upload"
          name={name}
          className="file-upload-input"
          onChange={handleFileChange}
          required
        />
      </div>
      <div className="selected-file">
        {selectedFile ? (
          <span>
            Arquivo selecionado:{" "}
            <strong>
              {selectedFile.name}.{selectedFile.extension} - (
              {(selectedFile.size / 1024).toFixed(2)} KB)
            </strong>
          </span>
        ) : (
          <span>Nenhum arquivo selecionado</span>
        )}
      </div>
    </>
  );
}
