'use client';

import React, { useEffect, useState } from 'react';

export default function Home() {
  const [demoTestData, setDemoTestData] = useState([]);

  useEffect(() => {
    return () => {
      const getTestData = async () => {
        const res = await fetch('http://localhost:3000/api/test/', {
          method: 'GET',
        });
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const testData = await res.json();
        setDemoTestData(testData?.data);
      };
      getTestData();
    };
  }, [demoTestData]);

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
    console.log('data that added...', data);
  };

  return (
    <div>
      <button onClick={addTest}> Create Demo Data </button>
      {demoTestData?.map((d) => (
        <div key={d?._id}>
          <h2>{d?.name} </h2>
          <p> {d?.email} </p>
        </div>
      ))}
    </div>
  );
}
