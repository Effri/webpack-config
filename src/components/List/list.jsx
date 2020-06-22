/**@format */

import React from "react";
import { ListItem } from "./listItem";

export function List() {
  return (
    <div className="main__list list">
      <ListItem
        createDate={new Date()}
        title="Это заголовок дела и он может быть довольно большой длинны"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
        laboriosam aperiam minima minus, nemo consectetur laudantium repudiandae
        perferendis quidem iste laborum ducimus distinctio? Eveniet amet
        asperiores, non aspernatur voluptate rem?"
      />
    </div>
  );
}
