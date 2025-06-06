import { Navbar } from "../../components/Navbar/navbar";
import styles from "./home.module.css";
import { Input } from "../../components/Input/input";
import { useState } from "react";

export function HomePage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [counter, setCounter] = useState(0);

  const handleInputChange = (event) => {
    setNome(event.target.value);
    console.log(e.target.value);
  };

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <Input
        type="text"
        placeholder="Escreva seu nome..."
        value={nome}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        placeholder="Escreva seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <h1 style={{color: 'white'}}>Contador:{counter}</h1>
      {/* <div> */}

      <button className={styles.button} onClick={handleCounter}>incrementar</button>
      {/* </div> */}
    </div>
  );
}
