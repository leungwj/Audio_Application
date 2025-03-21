import Search from '@/app/ui/search';
import Table from '@/app/ui/audio_files/table';

import { CreateAudioFile } from '@/app/ui/audio_files/buttons';
import { lusitana } from '@/app/ui/fonts';
// import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
 
export default async function Page() {


  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>My Audio Files</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search for audio... (not implemented)" />
        <CreateAudioFile />
      </div>
       <Suspense >
        <Table />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
      </div>
    </div>
  );
}