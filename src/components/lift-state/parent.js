import { useState } from "react";
import ChildOne from "./childOne";
import ChildTwo from "./childTwo";

function Parent() {
  const [data, setData] = useState(null);
  const [dataTwo, setDataTwo] = useState(null);

  async function searchAPI() {
    const api = "https://pokeapi.co/api/v2/pokemon/1";
    const apiTwo = "https://pokeapi.co/api/v2/pokemon/2";
    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw Error("something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        console.log("data below");
        console.log(data);
        setData(data);
      });
    fetch(apiTwo)
      .then((response) => {
        if (!response.ok) {
          throw Error("something went wrong");
        }
        return response.json();
      })
      .then((dataTwo) => {
        console.log("data below");
        console.log(dataTwo);
        setDataTwo(dataTwo);
      });
  }

  // Doesn't work, find out why
  return (
    <div>
      <button onClick={searchAPI}>Click This</button>
      {data && (
        <>
          <ChildOne data={data} />
          <ChildTwo data={data} dataTwo={dataTwo} />
        </>
      )}
    </div>
  );
}

export default Parent;
