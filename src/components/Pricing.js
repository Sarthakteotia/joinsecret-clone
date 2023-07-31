import React from 'react';

const Pricing = () => {
  return (
    <div className="pricing-container">
      <header>
        <h1>Pricing</h1>
      </header>
      <section>
        <h2>Basic Plan</h2>
        <p>Perfect for starters</p>
        <p>$9.99/month</p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <button>Sign Up</button>
      </section>
      <section>
        <h2>Pro Plan</h2>
        <p>For professionals and small teams</p>
        <p>$19.99/month</p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
        </ul>
        <button>Sign Up</button>
      </section>
      <section>
        <h2>Enterprise Plan</h2>
        <p>For large teams and organizations</p>
        <p>$49.99/month</p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          <li>Feature 4</li>
          <li>Feature 5</li>
        </ul>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default Pricing;
