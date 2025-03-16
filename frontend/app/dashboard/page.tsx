import { UserGroupIcon, MusicalNoteIcon, CogIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
      <p className="text-gray-600">Manage your audio files and user accounts effortlessly.</p>

      {/* Quick Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Users Card */}
        <Link href="/dashboard/users" className="group block p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-4">
            <UserGroupIcon className="h-10 w-10 text-blue-500 group-hover:text-blue-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Users</h2>
              <p className="text-sm text-gray-600">Click here to manage user accounts.</p>
            </div>
          </div>
        </Link>

        {/* Audio Files Card */}
        <Link href="/dashboard/audio_files" className="group block p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-4">
            <MusicalNoteIcon className="h-10 w-10 text-green-500 group-hover:text-green-600" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Audio Files</h2>
              <p className="text-sm text-gray-600">View and play your uploaded audio files.</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
