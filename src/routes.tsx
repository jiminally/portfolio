import { Navigate, type RouteObject } from 'react-router-dom'
import HomePage from '@/pages/HomePage'

// Add the /projects/:slug route here when implementing issue #11.
export const routes: RouteObject[] = [
  { path: '/', Component: HomePage },
  // Vite removes this branch and its dynamic import from production builds.
  ...(import.meta.env.DEV
    ? [
        {
          path: '/design-system',
          lazy: async () => {
            const { default: Component } =
              await import('@/pages/DesignSystemPage')
            return { Component }
          },
        },
      ]
    : []),
  { path: '*', element: <Navigate to="/" replace /> },
]
