'use client';

import Link from 'next/link';
import {
    AtSymbolIcon,
    ExclamationCircleIcon,
    UserCircleIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { updateUser } from '@/app/lib/users';
import { useActionState } from 'react';
import { User } from '@/app/lib/definitions';


export default function Form({
    user,
}: {
    user: User;
}) {

    const updateUserWithId = updateUser.bind(null, user.id);
    const [errorMessage, formAction, isPending] = useActionState(
        updateUserWithId,
        undefined,
    );

    return (
        <form action={formAction}>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
            {/* Username */}
            <div className="mb-4">
                <label htmlFor="description" className="mb-2 block text-sm font-medium">
                    Username
                </label>
                <div className="relative mt-2 rounded-md">
                    <div className="relative">
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Enter a username"
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        defaultValue={user.username}
                        aria-describedby="username-error"
                        required
                    />
                    <UserGroupIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                </div>
            </div>

            {/* Email */}
            <div className="mb-4">
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                </label>
                <div className="relative mt-2 rounded-md">
                    <div className="relative">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter an email"
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        defaultValue={user.email}
                        aria-describedby="email-error"
                        required
                    />
                    <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                </div>
            </div>

            {/* Full Name */}
            <div className="mb-4">
                <label htmlFor="full_name" className="mb-2 block text-sm font-medium">
                    Full Name
                </label>
                <div className="relative mt-2 rounded-md">
                    <div className="relative">
                    <input
                        id="full_name"
                        name="full_name"
                        type="text"
                        placeholder="Enter your full name"
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        defaultValue={user.full_name}
                        aria-describedby="full_name-error"
                        required
                    />
                    <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
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
            href="/dashboard/users"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
            Cancel
            </Link>
            <Button type="submit" aria-disabled={isPending}>Edit User</Button>
        </div>
        </form>
    );
}