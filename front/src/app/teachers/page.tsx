import { getTeachers } from "@api/teachers";
import { TeachersListFeature } from "@features/TeachersListFeature";

export default async function Page() {
  const { data: teachers } = await getTeachers({ populate: "*" });

  return (
    <div className="pageContainer">
      <TeachersListFeature teachers={teachers || []} />
    </div>
  );
}
