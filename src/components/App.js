import React from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";
import { useState, useEffect } from "react";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    toppings: "",
    size: "",
    vegetarian: "",
  });

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data));
  }, []);

  function renderPizzas(data) {
    const updatedItems = pizzas.map((pizza) => {
      if (pizza.id !== data.id) {
        return pizza;
      } else {
        return data;
      }
    });
    setPizzas(updatedItems);
  }

  function renderupdatedPizza(updatedInfo) {
    console.log(updatedInfo);
    fetch(`http://localhost:3001/pizzas/${updatedInfo.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => renderPizzas(data));
  }
  function handleClick(pizza) {
    setFormData({
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian,
      id: pizza.id,
    });
  }

  return (
    <>
      <Header />
      <PizzaForm
        formData={formData}
        setFormData={setFormData}
        renderupdatedPizza={renderupdatedPizza}
      />
      <PizzaList pizzas={pizzas} handleClick={handleClick} />
    </>
  );
}

export default App;
