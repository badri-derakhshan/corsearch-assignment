import { getAllUsers } from '@/api/user';
import { User } from '@/types';
import { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);
  return (
    <>
      <div>this is users</div>
      <ul>{users?.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </>
  );
}
