import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <QueryClientProvider client={client}>
    {process.env.NODE_ENV !== 'production' ? (
      <ReactQueryDevtools initialIsOpen={false} />
    ) : null}
    <Head>
      <title>Next Template</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </QueryClientProvider>
);
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
