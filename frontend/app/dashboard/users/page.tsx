import Search from '@/app/ui/search';
import Table from '@/app/ui/users/table';

import { CreateUser } from '@/app/ui/users/buttons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
 
export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Users</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search user... (not implemented)" />
        <CreateUser />
      </div>
       <Suspense >
        <Table />
      </Suspense>
    </div>
  );
}