import { Inter } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider }  from '@mui/material-nextjs/v14-appRouter';
import theme from './ui/theme';  
import './ui/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Master Yeti Admin Dashboard',
  description: 'Next.js Tutorial',
}

export default function RootLayout({ children }) {
  return (
      <html lang="fr">
        <body>
          <AppRouterCacheProvider options={{ key: 'css' }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
  );
}