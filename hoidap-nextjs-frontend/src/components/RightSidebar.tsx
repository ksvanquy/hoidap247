import UserInfoCard from "./UserInfoCard";
import BulletinCard from "./BulletinCard";

export default function RightSidebar() {
  return (
    <aside className="space-y-4 bg-white p-4 hidden lg:block w-60">
      <UserInfoCard />
      <BulletinCard />
    </aside>
  );
}
