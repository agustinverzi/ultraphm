import '@mui/material-pigment-css/styles.css';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';

import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import theme from '@/utils/theme';

export const metadata: Metadata = {
  description: 'Accelerating Population Health Management',
  title: 'Ultra PHM',
};

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '100vh' }}>
              <Sidebar />
              <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                <Header />
                <Box sx={{ bgcolor: '#F3F4F6',flex: 1 }}>
                  {children}
                </Box>
              </Box>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
