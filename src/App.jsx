import React from 'react';
import '../src/scss/normalize.scss';
import 'macro-css';
import Header from './components/Header';
import LastNews from './components/LastNews';

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <LastNews />
      </main>
    </div>
  );
}
