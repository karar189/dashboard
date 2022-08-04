import React from "react";
import { useState } from "react";
const FormEle = () => {
  // const [value, setValue] = React.useState(null);
  return (
    <>
      <form>
        From: <input type="text" placeholder="Name of airport" />
        To: <input type="text" placeholder="Name of airport" />
        <br />
        <br />
        Date of Travel: <input type="date" />
        <button type="submit" name="btn">
          Search
        </button>
      </form>
    </>
  );
};

export default FormEle;
