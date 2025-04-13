export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  tariffId: string;
}

export type UserLessonsProgress =string[]