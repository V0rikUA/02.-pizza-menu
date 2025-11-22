import React from 'react';
import Pizza from './Pizza';
import { pizzaData } from '../data';

function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzas.length > 0 ? (
        <>
          {/* React fragment */}
          <p>
            Authentic Italian cuisine. {pizzas.length} pizzas to choose from.
            All from our stone oven, all organic, and delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please check back later.</p>
      )}
    </main>
  );
}

export default Menu;
