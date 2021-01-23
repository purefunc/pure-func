import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, NotFound } from '../pages';

export const MainLayout = () => {
  return (
    <main id="main">
      <Switch>
        {/* Static Routes */}
        <Route exact path="/" component={HomePage} />
        {/* 404 Page */}
        <Route component={NotFound} />
      </Switch>
    </main>
  );
};
