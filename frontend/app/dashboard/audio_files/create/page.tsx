import Form from '@/app/ui/audio_files/create-form';
import Breadcrumbs from '@/app/ui/audio_files/breadcrumbs';
 
export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Audio Files', href: '/dashboard/audio_files' },
          {
            label: 'Upload Audio File',
            href: '/dashboard/audio_files/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}