"use client";

import React, { createContext, useEffect, useState } from "react";
import { UserContextProps, UserContextType } from "./types";
import { StudentType } from "@types";
import { updateStudent } from "@api/student";
import { getCoursesForUserContext } from "./getCoursesForUserContext";

export const UserContext = createContext<UserContextType>({
  user: null,
  saveStudent: async () => {},
  isLoading: false,
  userCourses: null,
  userCoursesMeta: null,
});

export const UserContextProvider: React.FC<UserContextProps> = (props) => {
  const { user: initialUser, userCourses: userCoursesInitial, userCoursesMeta } = props;

  const [user, setUser] = useState<StudentType | null>(initialUser);
  const [isLoading, setIsLoading] = useState(false);

  const [userCourses, setUserCourses] = useState(userCoursesInitial);

  useEffect(() => {
    getCoursesForUserContext(user).then(({ data }) => {
      if (!data) {
        return;
      }

      setUserCourses(data);
    });
  }, [user?.level]);

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
    <UserContext.Provider value={{ user, saveStudent, isLoading, userCourses, userCoursesMeta }}>
      {props.children}
    </UserContext.Provider>
  );
};
