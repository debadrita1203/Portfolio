import React, { useEffect, useRef, useState } from 'react';
import '../styles/About.css';

function InfoCard({ title, children, direction = 'left' }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`info-card slide-in-${direction} ${isVisible ? 'visible' : ''}`}
    >
      <h3>{title}</h3>
      <div className="card-content">{children}</div>
    </div>
  );
}

export default InfoCard;
