import React from 'react';
import '../scss/last-news.scss';
import lastNewsBg from '../assets/main/last-news.svg';

export default function LastNews() {
  return (
    <section className="last-news ">
      <div className="last-news__wrapper d-flex justify-between">
        <div className="last-news__title">Don’t close your eyes</div>
        <div className="last-news__info">
          <p className="last-news__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem.
            Cras ornare arcu dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
          </p>
          <div className="last-news__label d-flex justify-between ">
            <p className="last-news__label-text">
              <span>Text</span> Jakob Gronberg
            </p>
            <p className="last-news__label-data">
              <span>Data</span> 16. March 2022
            </p>
            <p className="last-news__label-duration">
              {' '}
              <span>Duration</span> 1 Min
            </p>
            <button className="last-news__label-btn">Label</button>
          </div>
        </div>
      </div>
      <div className="last-news__img d-flex justify-center mt-48">
        <img src={lastNewsBg} alt="bg" />
      </div>
    </section>
  );
}
