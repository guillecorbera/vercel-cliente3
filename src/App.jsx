
import './App.css'


import Usuarios from './components/Usuarios'
import CreateUsuarios from './components/CreateUsuarios'
import EditUsuario from './components/EditUsuarios'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Usuarios/>}></Route>
        <Route path="/create" element={<CreateUsuarios/>}></Route>
        <Route path="/edit/:id" element={<EditUsuario/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
