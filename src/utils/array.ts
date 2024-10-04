type Primitives = string | number;

type GetPrimitiveKeys<
  T extends Record<Primitives, unknown>,
  K = keyof T
> = K extends string ? (T[K] extends Primitives ? K : never) : never;

type FilterByParams<T> = { filterKey: keyof T; search: string };

const filterBy = <T extends Record<Primitives, Primitives | Record<Primitives, unknown>>>(
  items: T[],
  { filterKey, search }: FilterByParams<T>
): T[] => {
  if (!search) return items;
  return items.filter((item) => {
    if (typeof item[filterKey] === 'object') {
      return Object.values(item[filterKey]).some((value) => {
        if (!value || typeof value === 'object') return false;
        return value.toString().toLowerCase().includes(search.toLowerCase());
      });
    }
    return item[filterKey].toString().toLowerCase().includes(search.toLowerCase());
  });
};

type SortByParams<T extends Record<Primitives, unknown>> = {
  sortBy: GetPrimitiveKeys<T>;
  order: 'asc' | 'desc';
};
const sortBy = <T extends Record<Primitives, Primitives | Record<Primitives, unknown>>>(
  items: T[],
  { sortBy, order }: SortByParams<T>
) => {
  if (!sortBy) return items;
  return [...items].sort((a, b) => {
    if (order === 'asc') return a[sortBy].toString().localeCompare(b[sortBy].toString());
    return b[sortBy].toString().localeCompare(a[sortBy].toString());
  });
};

export { filterBy, sortBy };
export type { FilterByParams, SortByParams };
