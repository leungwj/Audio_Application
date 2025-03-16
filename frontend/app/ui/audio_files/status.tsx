"use client";

import { getStreamingUrl } from '@/app/lib/audio_files';
import { PlayCircleIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export default function PlaybackWidget({ id }: { id: string }) {

  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  async function handleClick() {
    const { audio_url, error } = await getStreamingUrl(id);

    if (error) {
      return null;
    }

    setAudioUrl(audio_url);
  }

  return (
<div className="flex items-center gap-3">
      {!audioUrl ? (
        <PlayCircleIcon
          className="cursor-pointer w-10 h-10 text-gray-700 hover:text-gray-900"
          onClick={handleClick}
        />
      ) : (
        <audio src={audioUrl} controls autoPlay />
      )}
    </div>
  );
}