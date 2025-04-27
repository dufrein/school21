import { Tariff } from "./tariff";
import { SexEnum } from './SexEnum';

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
  avatarId?: string;
  verifyTimestamp?: number; 
  sex?: SexEnum;
}

export type NewStudentType = Omit<StudentType, "id" | "documentId">;

export interface SignupFormType {
  name: string;
  surname: string;
  email: string;
  password: string;
}
