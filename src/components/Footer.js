import React from 'react';
import Order from './Order';

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div>
      <footer className="footer">
        {isOpen ? (
          <Order closeHour={closeHour} />
        ) : (
          <p>We're closed now. Please come back later.</p>
        )}
      </footer>
    </div>
  );
}

export default Footer;
