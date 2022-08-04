import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from './pages/Layout';
import { Inicio } from './pages/Inicio';
import { Blog } from './pages/Blog';
import { Contacto } from './pages/Contacto';
import { Articulos } from './pages/Articulos';
import { NoPage } from './pages/NoPage';
import { Usuario } from './pages/Usuario';
import { PanelControl } from './pages/PanelControl';
import { Gestion } from './pages/panel/Gestion';
import { AgregarArticulo } from './pages/panel/AgregarArticulo';
import { InicioPanel } from './pages/panel/InicioPanel';
import { Login } from './pages/Login';
import { useState } from 'react';
import { UsuarioContext } from './context/UsuarioContext';

function App() {
  const [usuarioState, setUsuario] = useState({
    sobrenombre: "",
    nombre: "",
    apellido: ""
  });

  return (
    
    <UsuarioContext.Provider value = {usuarioState}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Layout/>}>
            <Route index element = {<Inicio/>} />
            <Route path='blogs' element = {<Blog/>}/>
            <Route path='articulos' element = {<Articulos/>}/>
            <Route path='contacto' element = {<Contacto/>}/>
            <Route path='usuario/:nombre' element = {<Usuario/>}/>
            <Route path='panel/' element = {<PanelControl/>}>
              <Route index element = {<InicioPanel />}/>
              <Route path='iniciopanel' element = {<InicioPanel />}/>
              <Route path='gestion' element = {<Gestion/>}/>
              <Route path='agregararticulo' element = {<AgregarArticulo/>}/>
            </Route>
            <Route path='usuario/' element = {<Usuario/>}/>
            <Route path='redirigir/' element = {<Navigate to = "/blogs" />}/>
            <Route path='login/' element = {<Login/>}/>
            <Route path='*' element = {<NoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </UsuarioContext.Provider>
    
  );
}

export default App;
