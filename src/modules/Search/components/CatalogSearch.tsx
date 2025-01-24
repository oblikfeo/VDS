import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { SearchInput } from '../../../ui/components';

export const CatalogSearch = () => {
  const router = useRouter();

  const [search, setSearch] = useState('');

  const onSubmitHandler = () => {
    router.push(`/catalog/search/1?search=${search}`);
    setSearch('');
  };

  return <SearchInput value={search} onChange={setSearch} onSubmit={onSubmitHandler} />;
};
