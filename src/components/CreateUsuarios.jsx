import React, {useState} from 'react';
import axios from 'axios';

const baseUrl = "https://usuarios3-servidor-2882541bea2a.herokuapp.com/"


function CreateUsuarios (){
    const [first, setFirst] = useState();
    const [last, setLast] = useState();
	
	const [street, setStreet] = useState();
	const [city, setCity] = useState();
	
	const [email, setEmail] = useState();
    const [picture, setPicture] = useState();

	console.log(picture, first, last, street, city, email, )


    const Submit = (e) => {
        e.preventDefault();
        axios.post(`${baseUrl}createUsuarios`, {picture, first, last, street, city, email })
        .then(() => window.location.href = "/")
        // .catch(err => console.log(err));
		//       setFirst('');
		//       setLast('');
		//       setStreet('');
		//       setCity('');
		//       setEmail('');
		//       setPicture('');
    }


    return (
        <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>

			<div className='w-50 bg-white rounded p-3'>
				<a href="/" className='btn btn-dark btn-block'>Volver a Usuarios</a>

				<form onSubmit={Submit}>
					<h2>Añadir un Usuario nuevo</h2>
					<div className="mb-2">
						<label htmlFor="">Nombre</label>
						<input type="text" placeholder="Nombre" className="form-control"
						onChange={(e) => setFirst(e.target.value)}
						required></input> 
					</div>
					<div className="mb-2">
						<label htmlFor="">Apellido</label>
						<input type="text" placeholder="Apellido" className="form-control"    
						onChange={(e) => setLast(e.target.value)} required></input> 
					</div>
					<div className='mb-2'>
						<label htmlFor="">Dirección</label>
						<input type="text" className="form-control w-75" placeholder="Dirección" 
						onChange={(e) => setStreet(e.target.value)} required/>
					</div>
					<div className='mb-2'>
						<label htmlFor="">Ciudad</label>
						<input type="text" className="form-control w-75" placeholder="Ciudad" 
						onChange={(e) => setCity(e.target.value)} required/>
					</div>
					<div className='mb-2'>
						<label htmlFor="">Correo electrónico</label>
						<div className="input-group mb-2">
							<input type="email" className="form-control" placeholder="usuario e-mail" aria-label="Username" 
							onChange={(e) => setEmail(e.target.value)} required/>
						</div>
					</div>
					<div className="mb-2">
						<label htmlFor="">Foto</label>
						<input type="text" placeholder="Enlace foto usuario" className="form-control"
						onChange={(e) => setPicture(e.target.value)} required></input> 
					</div>
					<button className="btn btn-primary" type="submit">Enviar</button>
				 

			</form>
        </div>
    </div>
    )
}
export default CreateUsuarios;