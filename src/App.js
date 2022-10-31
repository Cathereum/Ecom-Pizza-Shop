import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
            <PizzaBlock title="Чизбургер-пицца" price={500} />
            <PizzaBlock title="Салями" price={490} />
            <PizzaBlock title="Пеперони" price={110} />
            <PizzaBlock title="Итальянская" price={222} />
            <PizzaBlock title="Маргарита" price={333} />
            <PizzaBlock title="4 Сыра" price={211} />
            <PizzaBlock title="С ананасами" price={100} />
            <PizzaBlock title="Мясная" price={540} />
            <PizzaBlock title="Острая" price={230} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
