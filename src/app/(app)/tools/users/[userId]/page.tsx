import { UserDetail } from "@/components/tools/user-detail";

export default async function UserDetailPage({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;
  return <UserDetail userId={userId} />;
}
