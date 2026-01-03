import { AccountSettings } from "@features/AccountSettings";
import { verifySession } from "@actions/session/session";
import { redirect } from "next/navigation";
import { getAvatars } from "@api/avatars";

export default async function Dashboard() {
  const session = await verifySession();

  if (!session?.isAuth) {
    redirect("/login");
  }

  const avatars = await getAvatars();
 
  return (
    <div className={'container'}>
      <h2>Личный кабинет</h2>
      <AccountSettings avatarsWoman={avatars?.avatarsWoman} avatarsMan={avatars?.avatarsMan}/>
    </div>
  );
}
