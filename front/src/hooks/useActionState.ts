"use client";

import { useFormState } from "react-dom";

type ActionState<T> = {
  errors?: Record<string, string[]>;
  data?: T;
  isUpdated?: boolean;
};

export function useActionState<T>(action: (state: ActionState<T>, formData: FormData) => Promise<ActionState<T>>) {
  const initialState: ActionState<T> = {};
  const [state, formAction] = useFormState(action, initialState);

  return [state, formAction] as const;
}

export function useFormStatus() {
  return useFormStatus();
} 