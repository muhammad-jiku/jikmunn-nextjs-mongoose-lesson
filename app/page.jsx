import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../src/styles/page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const addTest = async () => {
    const randomNum = Math.floor(Math.random() * 1000);

    const res = await fetch('/api/test/add', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `Test ${randomNum}`,
        email: `test${randomNum}@test.com`,
      }),
    });

    const data = await res.json();
    console.log(data);
    return data;
  };
  return <h1> Hello there, welcome to demo of mongoose and nextjs</h1>;
}
