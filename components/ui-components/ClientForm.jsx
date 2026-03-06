'use client';
import { useActionState } from "react";
import ErrorBlock from "./ErrorBlock";

export default function ClientForm({ children, action, className }) {
  
  const [formState, formAction] = useActionState(action, {
    error: false,
    message: null,
  });
  return (
    <form className={className} action={formAction}>
      {formState.error && <ErrorBlock message={formState.message}/> }
      {children}
    </form>
  );
}
