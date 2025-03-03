import React from 'react';
import hopeDiesLast from '../assets/news/hope-dies-last.png';
import '../scss/news-card.scss';

export default function NewsCard() {
  return (
    <div className="news-card d-flex justify-center">
      <img className="news-card-img" src={hopeDiesLast} alt="hopeDiesLast" />
      <div className="news-card__imfo">
        <h3 className="news-card__title">Hope dies last</h3>
        <p className="news-card__info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Egestas dui id ornare arcu odio ut sem. Cras ornare arcu
          dui vivamus arcu felis bibendum ut. Porttitor leo a diam.
        </p>
        <div className="news-card-label__wrapper ">
          <div className="news-card__label d-flex justify-between align-center">
            <p className="news-card__label-text">
              <span>Text</span> Jakob Gronberg
            </p>
            <p className="news-card__label-data">
              <span>Data</span> 16. March 2022
            </p>
            <p className="news-card__label-duration">
              {' '}
              <span>Duration</span> 1 Min
            </p>
            <div className="news-card__btn">
              <button className="news-card__label-btn">art</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
