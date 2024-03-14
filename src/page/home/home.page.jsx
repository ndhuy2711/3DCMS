import React, { memo } from "react";
import { IRoles } from "../../Roles";
import { ContentAdmin, ContentUser } from "./components";

export const Home = memo(({ user }) => {
  const roleUser = IRoles[user.data.role.name];
  return (
    <div>
      {roleUser === "admin" && <ContentAdmin user={user} />}
      {roleUser === "user" && <ContentUser user={user} />}
    </div>
  );
});
