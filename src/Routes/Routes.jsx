import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/homepage/home";
import { FormPage } from "../pages/form/form";
import { About } from "../pages/about/about";

export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/formulario" element={<FormPage/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    )
}