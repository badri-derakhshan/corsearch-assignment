import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { ListFilter, ArrowDownAZ, ArrowUpAZ } from 'lucide-react';
import styles from './style.module.scss';
import { FilterByParams, SortByParams } from '@/utils/array';
import { User } from '@/types';
import { cn } from '@/lib/utils';
console.log({ styles });

export type Props = {
  filter: FilterByParams<User>;
  setFilter: (filter: FilterByParams<User>) => void;
  sort?: SortByParams<User>;
  setSort: (sort: SortByParams<User> | undefined) => void;
};

const FilterContainer = ({
  filter: { filterKey, search },
  setFilter,
  setSort,
  sort
}: Props) => {
  const filterByKeys: FilterByParams<User>['filterKey'][] = [
    'email',
    'name',
    'phone',
    'website',
    'address'
  ];

  const handleSortChange = (sortBy: SortByParams<User>['sortBy']) => () => {
    const prevSortBy = sort?.sortBy;
    const hasSortByChanged = sortBy !== prevSortBy;
    if (hasSortByChanged) {
      setSort({ sortBy, order: 'asc' });
      return;
    }
    const prevOrder = sort?.order;
    if (prevOrder === 'desc' && !hasSortByChanged) {
      setSort(undefined);
      return;
    }

    setSort({ sortBy, order: prevOrder === 'asc' ? 'desc' : 'asc' });
  };

  const handleFilterChange = (filterKey: string) => {
    setFilter({
      filterKey: filterKey as FilterByParams<User>['filterKey'],
      search
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        <Input
          placeholder={`Filter ${filterKey}...`}
          value={search}
          onChange={(event) => setFilter({ filterKey, search: event.target.value })}
          className='max-w-sm'
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              <ListFilter className='h-4' /> Filter by {filterKey}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuLabel>Filter Options </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value={filterKey} onValueChange={handleFilterChange}>
              {filterByKeys.map((filter, index) => (
                <DropdownMenuRadioItem key={index} value={filter}>
                  {filter}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className={styles.sortContainer}>
        <Button
          onClick={handleSortChange('name')}
          className={cn(
            styles.sortButton,
            sort?.sortBy === 'name' && styles['sortButton--active']
          )}
        >
          Name{' '}
          {sort?.sortBy === 'name' && sort.order === 'asc' ? (
            <ArrowDownAZ />
          ) : (
            <ArrowUpAZ />
          )}
        </Button>
        <Button
          onClick={handleSortChange('email')}
          className={cn(
            styles.sortButton,
            sort?.sortBy === 'email' && styles['sortButton--active']
          )}
        >
          Email{' '}
          {sort?.sortBy === 'email' && sort.order === 'asc' ? (
            <ArrowDownAZ />
          ) : (
            <ArrowUpAZ />
          )}
        </Button>
      </div>
    </div>
  );
};

export { FilterContainer };
