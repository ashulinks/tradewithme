// pages/_app.js
import '../styles/globals.css';  // ✅ global CSS here

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
