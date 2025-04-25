"use client";
import React from "react";

interface PriceCardProps {
  title: string;
  price: string;
  color: string;
  children: React.ReactNode;
}

const PriceCard: React.FC<PriceCardProps> = ({ title, price, color, children }) => {
  return (
    <div className={`card ${color}`}>
      <span />
      <div className="price-head">
        <h3>{title}</h3>
        <p className="price">Starting at {price}</p>
      </div>
      <ul>{children}</ul>
      <a href="#" className="btn">Get Started</a>
    </div>
  );
};

const Packages: React.FC = () => {
  return (
    <section id="price">
      <h1>Price Plan</h1>
      <div className="plans-container">
        <PriceCard title="Basic" price="$999" color="basic-plan">
          <li>✔ Concept Design</li>
          <li>✔ Basic Floor Plans</li>
          <li>✔ 1 Revision</li>
          <li>❌ No 3D Rendering</li>
          <li>✔ Standard Consultation</li>
        </PriceCard>

        <PriceCard title="Standard" price="$1,499" color="standard-plan">
          <li>✔ Concept Design</li>
          <li>✔ Detailed Floor Plans</li>
          <li>✔ 3 Revisions</li>
          <li>✔ Basic 3D Rendering</li>
          <li>✔ Standard Consultation</li>
        </PriceCard>

        <PriceCard title="Premium" price="$2,499" color="premium-plan">
          <li>✔ Custom Concept Design</li>
          <li>✔ Full Architectural Plans</li>
          <li>✔ Unlimited Revisions</li>
          <li>✔ High-Quality 3D Rendering</li>
          <li>✔ Premium Consultation & Support</li>
        </PriceCard>
      </div>
    </section>
  );
};

export default Packages;
