import { useState } from "react";
import { HomePage } from "./pages/homepage/home";
import { About } from "./pages/about/about";

function App() {
  const [count, setCount] = useState(0);

  //ARRAY - lista
  const series = [
    "Ted Lasso",
    "Dexter",
    "Gilmore Girls",
    "Severance",
    "Stranger Things",
    "Breaking Bad",
    "Fleabag"
  ];
  const numbers = [1, 2, 3, 2, 7, 8, 6, 6, 5, 7];

  // const array1 = numbers.map((i) => i * 2);
  // console.log(array1);

  return (
    <HomePage/>
    // <About/>
    //retorno - onde vai aparecer na tela
    // <>
    //   {series.map((serie, index) => (
    //     <h1 key={index}>{serie}</h1>
    //   ))}

    //   <p>{series[1]}</p>
    //   <p>{series[3]}</p>

    //   {numbers
    //   .filter((number)=> number === 7)
    //   .map((number, index)=> (
    //     <p key={index}>{number}</p>
    //   ))}
    // </>
  );
}

export default App;
