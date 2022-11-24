import React from "react";

const TargetButton = (btnProps) => {
  return (
    <>
      <div className="cta text-center mt-5 mb-1">
        <a
          href={btnProps.target}
          className="text-uppercase text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
          download={btnProps.download}
        >
          {btnProps.name}
        </a>
      </div>
    </>
  );
};
export default TargetButton;
