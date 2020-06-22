/** @format */
import React from "react";
export function Nav() {
  return (
    <nav className="nav header__nav">
      <h1 className="nav__logo">MyLogo</h1>
      <ul className="nav__content">
        <li className="nav__item" tabIndex={0}>
          <i className="far fa-plus-square" /> Добавить дело
        </li>
        <li className="nav__item" tabIndex={0}>
          <i className="far fa-minus-square" /> Очистить список дел
        </li>
        <li className="nav__item" tabIndex={0}>
          <i className="far fa-cog" /> Настройки
        </li>
        <li className="nav__item" tabIndex={0}>
          <i className="far fa-comments-alt" /> Обратная связь
        </li>
      </ul>
    </nav>
  );
}
