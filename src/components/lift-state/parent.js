import { useState } from "react";
import ChildOne from "./childOne";
import ChildTwo from "./childTwo";

function Parent() {
  const [data, setData] = useState(null);

  async function searchAPI() {
    const api = "https://pokeapi.co/api/v2/pokemon/1";
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={searchAPI}>Click This</button>
      {data && (
        <>
          <ChildOne data={data} />
          <ChildTwo data={data} />
        </>
      )}
    </div>
  );
}

export default Parent;
