import { signOut } from "next-auth/react";
import { User, LogOut } from "lucide-react";

import { Avatar, DropdownMenu, Divider } from "@/components/ui";

import { AccountMenuProps } from "./AccountMenu.types";
import { getNameInitial } from "@/lib/utils";

export default function AccountMenu({ session }: AccountMenuProps) {
  const onLogout = () => {
    signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger className="flex items-center justify-center">
        <Avatar
          src={session.user.image || ""}
          alt={session.user.name || ""}
          fallback={getNameInitial(session.user.name)}
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <div className="flex items-center gap-4 p-2">
          <Avatar
            src={session.user.image || ""}
            alt={session.user.name || ""}
            fallback={getNameInitial(session.user.name)}
            rootClassName="w-10 text-md"
          />
          <div className="flex-1">
            <p className="font-bold text-sm">{session.user.name}</p>
            <span className="text-xs text-gray-500">{session.user.email}</span>
          </div>
        </div>
        <Divider />
        <DropdownMenu.Item>
          <User size={18} />
          <span>Profile</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={onLogout}>
          <LogOut size={18} />
          <span>Logout</span>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
