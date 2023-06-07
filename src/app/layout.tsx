'use client';

import { QueryClient, QueryClientProvider } from 'react-query';

import { Favorites } from '@/components/Favorites';
import { Header } from '@/components/Header';
import GlobalStyle from '@/styles/global';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <html lang="en">
          <body>
            <Header />
            <Favorites />
            {children}
          </body>
        </html>
      </QueryClientProvider>
    </>
  );
}
