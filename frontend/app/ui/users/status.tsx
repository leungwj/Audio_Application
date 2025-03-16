import { CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function UserStatus({ disabled }: { disabled: boolean }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-red-500 text-white': disabled,
          'bg-green-500 text-white': !disabled,
        },
      )}
    >
      { disabled == true ? (
        <>
          Disabled
          <ClockIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
      { disabled == false ? (
        <>
          Active
          <CheckCircleIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}