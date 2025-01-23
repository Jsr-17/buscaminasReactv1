import React from "react";

export const CeldaComponent = ({ valor = " " }) => {
  return (
    <button
      className="border border-2 border-dark-subtle fs-2 fw-bold text-success"
      style={{ minWidth: 50, minHeight: 50 }}
    >
      {valor}
    </button>
  );
};