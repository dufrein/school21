import { UserContext } from "@context/UserContext";
import { useContext } from "react";

export const useGetCheckLessonFinished = ()=>{
  const {user} = useContext(UserContext);

 return (lessonId: string)=>!!user?.finishedLessonsIds.includes(lessonId);
}