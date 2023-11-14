import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cadastro from './app/Cadastro/Cadastro.jsx'
import CadastroPessoa from './app/CadastroPessoa/CadastroPessoa.jsx'
import Error from './app/Error/Error.jsx'
import Home from './app/Home/index.jsx'
import Login from './app/Login/Login.jsx'
import Perfil from './app/Perfil/Perfil.jsx'
import RecuperacaoSenha from './app/RecuperacaoSenha/RecuperacaoSenha.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/Login",
        element: <Login/>
      },
      {
        path: "/Cadastro",
        element: <Cadastro/>
      },
      {
        path: "/CadastroPessoa",
        element: <CadastroPessoa/>
      },      
      {
        path: "/Perfil",
        element: <Perfil/>
      },
      {
        path: "/RecuperacaoSenha",
        element: <RecuperacaoSenha/>
      }     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)