import styles from '@/styles/Home.module.css';
import { PageHead } from '../components/head';
import { Footer } from '../components/footer';
import { useProtectRoute } from '../utils/auth/useProtectRoute';
import { Navbar } from '../components/navbar';

export default function Home() {
  useProtectRoute();

  return (
    <div className={styles.container}>
      <PageHead />
      <Navbar />

      <div>welcome home </div>

      <Footer />
    </div>
  );
}
