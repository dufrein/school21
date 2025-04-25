import { StudentType } from '@types/student'

export interface UserSettings {
  name: string;
  email: string;
  plan: string;
}

export interface AccountSettingsProps {
  onSave?: (settings: Partial<StudentType>) => void;
}
