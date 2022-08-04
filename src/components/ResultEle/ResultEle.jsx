import React from "react";

const ResultEle = (props) => {
  return (
    <>
      <div>
        <h3>Result</h3>
        <p>Flight Name</p>
        <p>From: {props.options.params.from}</p>
        <p>TO: {props.options.params.to}</p>
        <p>Depart date : </p>
        <p>Price</p>
        <p>
          <img src="" alt="flightLogo" />
        </p>
      </div>
    </>
  );
};

export default ResultEle;
