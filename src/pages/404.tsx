import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <main className='h-screen w-screen flex flex-col justify-center items-center'>
      <h1>404 - Page Not Found</h1>
      <Link href='/users' className='p-2 bg-'>
        <Button>Go back to home</Button>
      </Link>
    </main>
  );
};

export default Custom404;
