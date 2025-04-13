export interface IUser {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'user' | 'instructor';
  firstName?: string;
  lastName?: string;
  phone?: string;
  createdAt?: Date;
  updatedAt?: Date;
} 