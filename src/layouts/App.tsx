import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ContextProvider } from '../global';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import MainLayout from './MainLayout';

const App = () => (
  <ContextProvider>
    <Switch>
      <Route path="/" component={AppLayout} />
      <Route component={NoMatch} />
    </Switch>
  </ContextProvider>
);

const NoMatch = () => null;

const AppLayout = () => (
  <>
    <SEO />
    <a className="skip-link" href="#main">
      Skip to content
    </a>
    <Header />
    <MainLayout />
    <Footer />
  </>
);

export default App;
