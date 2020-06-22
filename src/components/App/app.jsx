/** @format */

import React from "react";
import { Nav } from "../Nav/nav";
import { List } from "../List/list";
import { SortList } from "../Sort/sortList";

export function App() {
  return (
    <>
      <header className="header">
        <Nav />
      </header>
      <main className="main">
        <SortList />
        <List />
      </main>
    </>
  );
}
