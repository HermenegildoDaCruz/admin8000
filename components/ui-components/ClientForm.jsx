'use client';
import { useActionState } from "react";

export default function ClientForm({ children, action, className }) {
  const [formState, formAction] = useActionState(action, {
    error: null,
    message: null,
  });
  return (
    <form className={className} action={formAction}>
        {/* Error block here!!  */}
      {children}
    </form>
  );
}
