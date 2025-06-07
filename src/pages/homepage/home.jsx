import { Navbar } from "../../components/Navbar/navbar";
import styles from "./home.module.css";
import { Input } from "../../components/Input/input";
import { useState } from "react";
import { Card } from "../../components/Card/card";
import { Button } from "../../components/Button/Button";


export function HomePage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);


  const series = [
    "Ted Lasso",
    "Dexter",
    "Gilmore Girls",
    "Severance",
    "Stranger Things",
    "Breaking Bad",
    "Fleabag",
  ];

  // const handleInputChange = (event) => {
  //   setNome(event.target.value);
  //   console.log(e.target.value);
  // };

  const handleClick = () => {
    console.log("clicou no botão");
  };

  const handleAlternarMensagem =()=> {
    setShow(!show)
  }

  return (
    <div className={styles.container}>
      <Navbar />

      <h1>Minhas séries favoritas</h1>

      <div className={styles.cardsContainer}>
        {series.map((serie, index) => (
          <>
            <Card key={index}>
              <p>{serie}</p>
            </Card>
          </>
        ))}
        <Button onClick={handleClick} title={"Clique aqui"} type="button" />
      </div>

      
         <Button onClick={()=>{handleAlternarMensagem}} title={show ? 'Esconder mensagem' : 'mostrar mensagem'} type="button" />
         {
          show && <p style={{color: 'white'}}>oie</p>
         }
    </div>
  );
}
