// 'use client'
import { useFormStatus } from "react-dom";

export default function FormActions() {
  const { pending } = useFormStatus();
  return (
    <div className="form-actions">
      <button type="button" className="btn" disabled={pending}>
        Cancelar
      </button>
      <button type="submit" className="btn btn-primary" disabled={pending}>
        {pending ? (
          <span>Salvando...</span>
        ) : (
          <span>Adicionar Documento</span>
        )}
      </button>
    </div>
  );
}
