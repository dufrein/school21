"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContextProps, UserContextType } from "./types";
import { StudentType } from "@types";
import { updateStudent } from "@api/student";
import { LearningContext } from "@context/LearningContext";

export const UserContext = createContext<UserContextType>({
  user: null,
  saveStudent: async () => {},
  isLoading: false,
});

export const UserContextProvider: React.FC<UserContextProps> = (props) => {
  const { user: initialUser } = props;
  const {openedCourse} = useContext(LearningContext);
  const [user, setUser] = useState<StudentType | null>(initialUser);
  const [isLoading, setIsLoading] = useState(false);
  console.log('openedCourse',openedCourse);
  const saveStudent = async (newStudentSettings: Partial<StudentType>) => {
    if (!user) {
      return;
    }
    const updatedStudent = await updateStudent(user?.documentId, { ...user, ...newStudentSettings })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });

    if (updatedStudent) {
      setUser(updatedStudent);
    }
  };

  useEffect(() => {
    if (initialUser) {
      setUser(initialUser);
    }
  }, [initialUser]);

  return (
    <UserContext.Provider value={{ user, saveStudent, isLoading }}>
      {props.children}
    </UserContext.Provider>
  );
};
