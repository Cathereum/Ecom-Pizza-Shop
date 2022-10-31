import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
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
