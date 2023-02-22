import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Header from '../shared/header/header'


export default function App({ Component, pageProps }: AppProps) {
  
  const router = useRouter();
  const isAuthRoute = router.pathname === '/auth/login' || router.pathname === '/auth/register';
  const isAuthenticated = true; 

  if (isAuthRoute || !isAuthenticated) {
    return <Component {...pageProps} />;
  }

  return (
    <>
    <Header />
    <Component {...pageProps} />
    </>
  )
}
