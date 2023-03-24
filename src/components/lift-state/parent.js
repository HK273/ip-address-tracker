import { useState } from "react";
import ChildOne from "./childOne";
import ChildTwo from "./childTwo";

function Parent() {
  const [data, setData] = useState(null);
  const [dataTwo, setDataTwo] = useState(null);

  async function searchAPI() {
    const api = "https://pokeapi.co/api/v2/pokemon/1";
    const apiTwo = "https://pokeapi.co/api/v2/pokemon/2";
    const responses = await Promise.all([fetch(api), fetch(apiTwo)]);
    const [data, dataTwo] = await Promise.all(
      responses.map((response) => response.json())
    );
    setData(data);
    setDataTwo(dataTwo);
  }

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
