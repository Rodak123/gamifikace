import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router';
import { router } from './router';
import { ThemeProvider } from './libs/providers/ThemeProvider';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './config/queryClient';
import { AuthProvider } from './libs/providers/AuthProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { env } from './config';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='dark'>
        <GoogleOAuthProvider clientId={env.VITE_GOOGLE_CLIENT_ID}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </GoogleOAuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
