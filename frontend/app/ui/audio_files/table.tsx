import { getMyAudioFiles } from '@/app/lib/audio_files';
import { Audio_File } from '@/app/lib/definitions';
import { MusicalNoteIcon } from '@heroicons/react/24/outline';
import PlaybackWidget from './status';

export default async function UsersTable() {
  const response_data = await getMyAudioFiles();

  if (response_data.error) {
    return <div>{response_data.error}</div>;
  }

  const audio_files: Audio_File[] = response_data.audio_files;

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {audio_files?.map((audio) => (
              <div
                key={audio.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <MusicalNoteIcon
                        className="mr-2"
                        width={28}
                        height={28}
                      />
                      <p>{audio.description}</p>
                    </div>
                    <p className="text-sm text-gray-500">{audio.category}</p>
                  </div>
                  
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <PlaybackWidget id={audio.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Audio Description
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Category
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Playback
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {audio_files?.map((audio) => (
                <tr
                  key={audio.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <MusicalNoteIcon
                        className=""
                        width={28}
                        height={28}
                      />
                      <p>{audio.description}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {audio.category}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <PlaybackWidget id={audio.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}