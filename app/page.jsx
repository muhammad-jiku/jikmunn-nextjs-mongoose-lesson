import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../src/styles/page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <h1> Hello there, welcome to demo of mongoose and nextjs</h1>;
}
