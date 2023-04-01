import React from "react";

function ProfitStatusCard(props) {
    const { title, price, percentage } = props
  return (
    <div className="profit-status-card">
      <div className="profit-status-card-content">
        <p className="profit-status-card-text">{title}</p>
        <p className="profit-status-card-number">
          ${price}<span>{`(${percentage}%)`}</span>
        </p>
      </div>
    </div>
  );
}

export default ProfitStatusCard;
