import React from "react";
import { useState } from "react";

function PizzaForm({ renderupdatedPizza, formData, setFormData }) {
  const { topping, size, vegetarian } = formData;

  function handleSubmit(e) {
    e.preventDefault();
    renderupdatedPizza(formData);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"
            value={size}
            onChange={handleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={vegetarian}
              onChange={() => {
                setFormData({ ...formData, vegetarian: true });
              }}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              checked={!vegetarian}
              onChange={() => {
                setFormData({ ...formData, vegetarian: false });
              }}
            />
            <label className="Not Vegetarian">Non Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
