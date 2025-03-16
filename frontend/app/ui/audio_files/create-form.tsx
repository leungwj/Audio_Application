'use client';

import Link from 'next/link';
import {
    DocumentIcon,
    ExclamationCircleIcon,
    MusicalNoteIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createAudioFile } from '@/app/lib/audio_files';
import { useActionState } from 'react';

export default function Form() {
    const audio_categories = [
        'Music',
        'Podcast',
        'Audiobook',
        'Sound Effects',
        'Other',
    ]

    const [errorMessage, formAction, isPending] = useActionState(
        createAudioFile,
        undefined,
    );

    return (
        <form action={formAction}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
            {/* Description */}
            <div className="mb-4">
            <label htmlFor="description" className="mb-2 block text-sm font-medium">
                Audio Description
            </label>
            <div className="relative mt-2 rounded-md">
                <div className="relative">
                <input
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Enter a description for your audio"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    aria-describedby="description-error"
                    required
                />
                <DocumentIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
            </div>
            </div>

            {/* Category */}
            <div className="mb-4">
            <label htmlFor="category" className="mb-2 block text-sm font-medium">
                Audio Category
            </label>
            <div className="relative">
                <select
                id="category"
                name="category"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="category-error"
                required
                >
                <option value="" disabled>
                    Select a category
                </option>
                {audio_categories.map((category) => (
                    <option key={category} value={category}>
                    {category}
                    </option>
                ))}
                </select>
                <MusicalNoteIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
            </div>

            <legend className="mb-2 block text-sm font-medium">
                Audio File (maximum file size: 5MB)
            </legend>
            <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                <div className="flex gap-4">
                <div className="flex items-center">
                    <input
                        id="audio_file"
                        name="audio_file"
                        type="file"
                        multiple={false}
                        accept="audio/*"
                        className="block w-full text-sm text-gray-600 
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-lg file:border-0
                        file:text-sm file:font-semibold
                        file:bg-gray-100 file:text-gray-700
                        hover:file:bg-gray-200"
                        aria-describedby="audio_file-error"
                        required
                    />
                </div>
                </div>
            </div>

            {errorMessage && (
                <div className="flex items-center space-x-2" aria-live="polite" aria-atomic="true">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                    <p className="text-sm text-red-500">{errorMessage}</p>
                </div>
            )}
        </div>
        <div className="mt-6 flex justify-end gap-4">
            <Link
            href="/dashboard/audio_files"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
            Cancel
            </Link>
            <Button type="submit" aria-disabled={isPending}>Upload Audio</Button>
        </div>
        </form>
    );
}