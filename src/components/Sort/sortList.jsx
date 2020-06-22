/** @format */

import React from "react";

export function SortList() {
  return (
    <nav aria-label="Сортировать дела по" className="main__sort sort">
      <div className="sort__item">Дата <i className="fal fa-sort"></i></div>
      <div className="sort__item">Название <i className="fal fa-sort"></i></div>
    </nav>
  );
}
