import React from 'react';
import '../src/scss/normalize.scss';
import 'macro-css';
import Header from './components/Header';
import LastNews from './components/LastNews';
import NewsCard from './components/NewsCard';

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <LastNews />
        <section className="news-list mt-50">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </section>
      </main>
    </div>
  );
}
