import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to AudioApp</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Upload and stream your audio files effortlessly. Sign up to get started!
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link href="/login" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Login
        </Link>
        <Link href="/register" className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
