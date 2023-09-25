import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {CORS_URL} from'../../config'


function Usuarios (){
    const [usuarios, setUsuarios] = useState([])
    const [estado, setEstado] = useState(0)
 
    const baseUrl = "https://usuarios3-servidor-2882541bea2a.herokuapp.com/"

    useEffect(()=> {
        // axios.get("http://localhost:3001")
        axios.get(`${baseUrl}`)
        .then(result=> setUsuarios(result.data))
        .catch(err=> console.log(err));
    }, [estado])

   	const handleDelete = (id) => {
        axios.delete(`${baseUrl}deleteUsuarios/${id}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));
        setEstado(estado+1)
    }


    return (

		<div className='d-flex bg-info lista justify-content-center align-items-center'>
			<h3>Lista de Usuarios</h3>
        <div className='w-60 bg-white rounded p-3'>
            <Link to="/create" className="btn btn-success">Agregar</Link>
            <table className='table'>
            <thead>
				<tr>
					<th>Imagen</th>
					<th>Nombre</th>
					<th>Apellido</th>
					<th>Dirección</th>
					<th>Ciudad</th>
					<th>Correo</th>
					<th colSpan={2}>Acciones</th>
				</tr>
            </thead>
            <tbody>
                {
                    usuarios.map((usuario) => {
                        return <tr key={usuario._id}>
                            <td><img src={usuario.picture} alt={usuario._id} className="rounded"/></td>
							<td>{usuario.first}</td>
                            <td>{usuario.last}</td>
							<td>{usuario.street}</td>
							<td>{usuario.city}</td>
							<td>{usuario.email}</td>
                            <td><Link to={`/edit/${usuario._id}`} className="btn btn-success">Editar</Link></td>
                            <td><button className="btn btn-danger" onClick={(e) => handleDelete(usuario._id)}>Eliminar</button></td>
                        </tr>
                    })
                }
            </tbody>
            </table>
        </div>
    </div>
    )
}
export default Usuarios;