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

export const ContactPage = Loadable({
  loader: async () => {
    const c = await import('../pages/contact')
    return c.default
  },
  loading: Loader,
  delay: 3000,
})

export const ServicesPage = Loadable({
  loader: async () => {
    const c = await import('../pages/services')
    return c.default
  },
  loading: Loader,
  delay: 3000,
})

export const SitesPage = Loadable({
  loader: async () => {
    const c = await import('../pages/sites')
    return c.default
  },
  loading: Loader,
  delay: 3000,
})

export const MenusPage = Loadable({
  loader: async () => {
    const c = await import('../pages/menus')
    return c.default
  },
  loading: Loader,
  delay: 3000,
})

export const MenusBetaPage = Loadable({
  loader: async () => {
    const c = await import('../pages/menus/beta')
    return c.default
  },
  loading: Loader,
  delay: 3000,
})

export const MenusExamplesPage = Loadable({
  loader: async () => {
    const c = await import('../pages/menus/examples')
    return c.default
  },
  loading: Loader,
  delay: 3000,
})

export const MenusPlansPage = Loadable({
  loader: async () => {
    const c = await import('../pages/menus/plans')
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
