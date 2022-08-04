import "./App.css";
import { useState } from "react";
import axios from "axios";

import FormEle from "./components/Form/FormEle";
import ResultEle from "./components/ResultEle/ResultEle";

function App() {
  const options = {
    method: "GET",
    url: "https://siddiq-such-flight-v1.p.rapidapi.com/search",
    params: {
      to: "DEL",
      from: "KOL",
      currency: "INR",
      "depart-date": "2015-03-31",
    },
    headers: {
      "X-RapidAPI-Key": "516ad159b9msh4705e23e9d3a81cp18a13ajsnfa40052dcf79",
      "X-RapidAPI-Host": "siddiq-such-flight-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  const [result, setResult] = useState({
    to: "",
    from: "",
    currency: "",
    "depart-date": "",
    "return-date": "",
    "adult-count": "",
  });
  const handleInputs = () => {
    console.log("handleInputs");
  };
  return (
    <>
      {/* <FormEle /> */}
      <form>
        From:{" "}
        <input
          type="text"
          placeholder="Name of airport"
          value={result.from}
          onChange={handleInputs}
        />
        To:{" "}
        <input
          type="text"
          placeholder="Name of airport"
          value={result.to}
          onChange={handleInputs}
        />
        <br />
        <br />
        Date of Travel: <input type="date" />
        <button type="submit" name="btn">
          Search
        </button>
      </form>
      <br />
      <br />

      <ResultEle options={options} />
    </>
  );
}

export default App;
