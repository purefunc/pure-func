import React from 'react';
import { ContextProvider } from './global';

interface AppProps {}

function App({}: AppProps) {
  return (
    <ContextProvider>
      <div className="App">
        <header className="App-header">header</header>
        <main>main</main>
        <footer>footer</footer>
      </div>
    </ContextProvider>
  );
}

export default App;
