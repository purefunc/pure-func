import Loadable from 'react-loadable'
import Loader from 'utilities/Loader'

/* Static Pages */

export const AboutPage = Loadable({
  loader: async () => {
    const c = await import('../pages/about')
    return c.default
  },
  loading: Loader,
  delay: 3000,
})

export const QrMenuPage = Loadable({
  loader: async () => {
    const c = await import('../pages/qr-menu')
    return c.default
  },
  loading: Loader,
  delay: 3000,
})

export const QrMenuBetaPage = Loadable({
  loader: async () => {
    const c = await import('../pages/qr-menu/beta')
    return c.default
  },
  loading: Loader,
  delay: 3000,
})

export const QrMenuPlansPage = Loadable({
  loader: async () => {
    const c = await import('../pages/qr-menu/plans')
    return c.default
  },
  loading: Loader,
  delay: 3000,
})

/* Layouts */

export const DashboardLayout = Loadable({
  loader: async () => {
    const c = await import('./DashboardLayout')
    return c.default
  },
  loading: Loader,
  delay: 3000,
})

/* 404 Template */

export const NotFoundPage = Loadable({
  loader: async () => {
    const c = await import('../pages/404')
    return c.default
  },
  loading: Loader,
  delay: 3000,
})
