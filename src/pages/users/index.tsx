import { getAllUsers } from '@/api/user';
import { DashboardLayout } from '@/components/layouts/DashboardLayout';
import { FilterContainer } from '@/components/pages/users/FilterContainer';
import { UserCard } from '@/components/pages/users/UserCard';
import type { User } from '@/types';
import { filterBy, FilterByParams, sortBy, SortByParams } from '@/utils/array';
import { useQuery } from '@tanstack/react-query';
import { ReactElement, useMemo, useState } from 'react';
import { NextPageWithLayout } from '../_app';
import style from './style.module.scss';

const Users: NextPageWithLayout = () => {
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: getAllUsers
  });

  const [filter, setFilter] = useState<FilterByParams<User>>({
    filterKey: 'name',
    search: ''
  });

  const [sort, setSort] = useState<SortByParams<User> | undefined>();

  const modifiedUsers = useMemo(() => {
    if (!data) return;
    const filteredData = filter ? filterBy(data, filter) : data;

    if (!sort) return filteredData;
    return sortBy(filteredData, sort);
  }, [filter, sort, data]);

  return (
    <>
      <FilterContainer
        setFilter={setFilter}
        filter={filter}
        setSort={setSort}
        sort={sort}
      />

      <div className={style.container}>
        {modifiedUsers
          ? modifiedUsers.map((user) => <UserCard key={user.id} user={user} />)
          : new Array(10).fill(0).map((_, i) => <UserCard showSkeleton key={i} />)}
      </div>
    </>
  );
};

Users.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Users;
