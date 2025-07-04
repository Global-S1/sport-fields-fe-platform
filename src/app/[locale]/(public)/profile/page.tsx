import ProfilePage from "@/modules/customer/profile/pages/profile.page";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AppProfilePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("current-token");

  if (token?.value && JSON.parse(token?.value)) {
    return <ProfilePage />;
  }
  redirect("/auth");
}
