import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ContextProvider } from 'global'
import { Header } from './Header'
import { Footer } from './Footer'
import MainLayout from './MainLayout'
import { useScrollToTop } from 'hooks'


const App = () => {
  useScrollToTop()
  return (
    <ContextProvider>
      <Switch>
        <Route path="/" component={AppLayout} />
        <Route component={NoMatch} />
      </Switch>
    </ContextProvider>
  )
}

const NoMatch = () => null

const AppLayout = () => (
  <>
    <a className="skip-link" href="#main">
      Skip to content
    </a>
    <div id="layout-wrapper">
      <Header />
      <MainLayout />
      <Footer />
    </div>
  </>
)

export default App
