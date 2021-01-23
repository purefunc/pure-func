import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ContextProvider } from './global';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { SEO } from './components/SEO';
import { MainLayout } from './layouts/MainLayout';

function App() {
  return (
    <ContextProvider>
      <Switch>
        <Route path="/" component={AppLayout} />
      </Switch>
    </ContextProvider>
  );
}

const AppLayout = () => {
  return (
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
};

export default App;
