import React from "react";
import { NavLink } from "react-router-dom";

const CTA = (btnProps) => {
  return (
    <>
      <div className="cta text-center mt-5 mb-1">
        <NavLink
          to={btnProps.target}
          className="text-uppercase text-decoration-none"
        >
          {btnProps.name}
        </NavLink>
      </div>
    </>
  );
};
export default CTA;
