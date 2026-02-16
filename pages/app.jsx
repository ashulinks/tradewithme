import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const start = () => setTransitioning(true);
    const end = () => setTransitioning(false);

    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);

    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
    };
  }, [router]);

  return (
    <div className={transitioning ? 'page-exit' : 'page-enter'}>
      <Component {...pageProps} />
    </div>
  );
}
