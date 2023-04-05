import { useCallback, useMemo, useState } from 'react';

export default function usePagination<T>(data: T[], splice: number) {
  const [page, setPage] = useState(1);

  const nextPage = useCallback(() => {
    setPage((prevState) => {
      return prevState + 1;
    });
  }, [page, data]);

  const items = useMemo(() => (
    [...data].splice(0, page * splice)
  ), [page, data]);

  return {
    nextPage,
    items
  };
}
