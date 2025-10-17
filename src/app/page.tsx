import { caller } from "@/trpc/server";
import { Client } from "./client";
const Page = async () => {
  const users = await caller.getUsers();
  return (
    <div className='min-h-screen min-w-screen flex items-center justify-center'>
      <Client users={users} />
    </div>
  );
};
export default Page;
