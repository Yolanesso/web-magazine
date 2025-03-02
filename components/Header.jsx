import React from 'react';
import logo from '../src/assets/main/logo.svg';
import headerTitle from '../src/assets/main/main-banner.svg';
import '../scss/font.scss';
import '../scss/header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="logo" className="header__logo" />
      </div>

      <div className="header__title">
        <img
          width={1520}
          height={215}
          src={headerTitle}
          alt="title"
          className="header__title-img"
        />
      </div>

      <div className="header__news">
        <div className="header__news-title d-flex align-ceter">NEWS TICKER +++</div>
        <div className="header__news__wrapper d-flex justify-center">
          <div className="header__news__strings ">
            <p>Landscape+++ Episode 5 of Fyrre Magazine's podcast series is out now+++</p>
            <p>Landscape+++ Episode 5 of Fyrre Magazine's podcast series is out now+++</p>
          </div>
        </div>
      </div>
    </header>
  );
}
