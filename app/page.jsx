import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../src/styles/page.module.css';

const inter = Inter({ subsets: ['latin'] });

const getTestData = async () => {
  const res = await fetch('/api/test');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export default async function Home() {
  const data = await getTestData();

  const addTest = async () => {
    const randomNum = Math.floor(Math.random() * 1000);

    const res = await fetch('/api/test/add', {
      method: 'POST',
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

  return (
    <div>
      <button onClick={addTest}> Create Demo Data </button>
      {data.map((d, idx) => (
        <div key={idx}>
          <h2>{d?.name} </h2>
          <p> {d?.email} </p>
        </div>
      ))}
    </div>
  );
}
