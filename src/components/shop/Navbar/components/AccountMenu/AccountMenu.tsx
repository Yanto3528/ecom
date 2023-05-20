import { User, LogOut } from 'lucide-react';

import { Avatar, DropdownMenu, Divider } from '@/components/ui';
import { useSupabaseContext } from '@/contexts/auth.context';
import { getNameInitial } from '@/lib/utils';

import { AccountMenuProps } from './AccountMenu.types';

export default function AccountMenu({ currentUser }: AccountMenuProps) {
  const { supabase } = useSupabaseContext();

  const onLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger className="flex items-center justify-center">
        <Avatar
          src={currentUser.avatar_url}
          alt={currentUser.name}
          fallback={getNameInitial(currentUser.name)}
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <div className="flex items-center gap-4 p-2">
          <Avatar
            src={currentUser.avatar_url}
            alt={currentUser.name}
            fallback={getNameInitial(currentUser.name)}
            rootClassName="w-10 text-md"
          />
          <div className="flex flex-1 flex-col">
            <p className="text-sm font-bold">{currentUser.name}</p>
            <span className="text-xs text-gray-500">{currentUser.email}</span>
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
