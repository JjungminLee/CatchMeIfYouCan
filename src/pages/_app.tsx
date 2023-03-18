import type { AppProps } from 'next/app';

import "../../public/static/fonts/style.css"
import "../../public/static/reset.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Component {...pageProps} />
    
  );
}