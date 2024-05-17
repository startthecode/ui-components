import React from "react";

export const ContionalUi = ({ condition, Element }) => {
  if (condition) return Element;
  return null;
};
