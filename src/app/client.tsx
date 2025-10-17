"use client";

export const Client = ({ users }: { users: Record<string, any>[] }) => {
  return <div>Client Component : {JSON.stringify(users)}</div>;
};
