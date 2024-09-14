import React from "react";

const services = [
  {
    title: "Free Shipping",
    description: "Get free shipping on all orders over $50.",
    icon: "https://example.com/free-shipping-icon.png",
  },
  {
    title: "Secure Payment",
    description:
      "We offer secure payment options to ensure your transactions are safe.",
    icon: "https://example.com/secure-payment-icon.png",
  },
  {
    title: "Easy Returns",
    description: "Return or exchange items easily within 30 days of delivery.",
    icon: "https://example.com/easy-returns-icon.png",
  },
  {
    title: "24/7 Customer Support",
    description: "Get help anytime with our 24/7 customer support team.",
    icon: "https://example.com/customer-support-icon.png",
  },
];
const Services = () => {
  return (
    <div className="services-container">
      <h1>Why Shop with Us</h1>
      <p>
        We offer a range of services to make your shopping experience easy and
        convenient.
      </p>
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <img src={service.icon} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
