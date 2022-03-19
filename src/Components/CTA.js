import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const CTA = (btnProps) => {
  let location = useRouteMatch();
  location = location.path.replaceAll("/", "");
  return (
    <>
      <div className="cta text-center mt-5 mb-1">
        <NavLink
          to={btnProps.target}
          className={location + " text-uppercase text-decoration-none"}
        >
          {btnProps.name}
        </NavLink>
      </div>
    </>
  );
};
export default CTA;
