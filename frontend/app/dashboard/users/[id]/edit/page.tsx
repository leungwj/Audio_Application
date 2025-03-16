import Form from '@/app/ui/users/edit-form';
import Breadcrumbs from '@/app/ui/users/breadcrumbs';
import { getUserById } from '@/app/lib/users';
import { notFound } from 'next/navigation';
 
export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id
  const { user, error } = await getUserById(id);

  if (error) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form user={user} />
    </main>
  );
}