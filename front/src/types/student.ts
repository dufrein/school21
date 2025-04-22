import { Tariff } from "./tariff";

/**
 * Тип студента (пользователь - ученик школы)
 * @param verifyTimestamp - таймштамп даты отправки ссылки на верификацию (при регистрации или обновлении пароля)
 */
export interface StudentType {
  id: string;
  name: string;
  surname: string;
  email: string;
  tariff: Tariff | null;
  isActive: boolean;
  finishedLessonsIds: string[];
  documentId: string;
  password: string;
  phone?: string;
  avatar?: unknown;
  verifyTimestamp?: number; 
}

export type NewStudentType = Omit<StudentType, "id" | "documentId">;

export interface SignupFormType {
  name: string;
  surname: string;
  email: string;
  password: string;
}
