import '../public/globals.css'
import { AppProps } from 'next/app';
import { ClothesProvider } from '@/store/clothes-context';
export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {

  return (
    <ClothesProvider>
          <Component {...pageProps} />
    </ClothesProvider>
  );
}
