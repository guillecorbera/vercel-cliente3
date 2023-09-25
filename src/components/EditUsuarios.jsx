import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const baseUrl = "https://usuarios3-servidor-2882541bea2a.herokuapp.com/"



export default function EditUsuarios() {
  	const { id } = useParams();
	const [first, setFirst] = useState('')
	const [last, setLast] = useState('')
	const [street, setStreet] = useState('');
	const [city, setCity] = useState('');
	const [email, setEmail] = useState('');
	const [picture, setPicture] = useState('');

	const [usuario, setUsuario] = useState([]);

	useEffect(() => {
		axios.get(`${baseUrl}${id}`)
		  .then((datos) => setUsuario(datos.data),)
		  .catch((error) => console.error(error));
	  },[id],
	  
	   );


	//    const objeto = {
	// 	_id: '650489b3e7797d5f739d55fc',
	// 	first: 'Olga',
	// 	last: 'Sánchez',
	// 	street: 'Calle de Ferraz',
	// 	city: 'Las Palmas de Gran Canaria',
	//   };
	  
	//   for (const clave in usuario) {
	// 	(`${clave}: ${usuario[clave]}`);
	//   }


	   let ucity = usuario.city;
	   let ustreet = usuario.street;
	   let uemail = usuario.email;
	   let upicture = usuario.picture;
	   let ufirst = usuario.first;
	   let ulast = usuario.last;


  const handleUpdate = () => {

	setFirst(ufirst);
	console.log(first)
	setLast(ulast);
	setStreet(ustreet);
	setCity(ucity);
	setEmail(uemail);
	setPicture(upicture);

	const updatedUsuario = (first, last, street, city, email, picture)
	console.log(updatedUsuario)

	// setUsuario[{
    //   first: document.querySelector('#firstInput').value,
    //   last: document.querySelector('#lastInput').value,
    //   street: document.querySelector('#streetInput').value,
    //   city: document.querySelector('#cityInput').value,
    //   email: document.querySelector('#emailInput').value,
    // }];

    axios.put(`${baseUrl}editUsuario/${id}`, updatedUsuario)
      .then((res) => {
        console.log(res);
        // You can add a redirection or success message here if needed
      })
      .catch((err) => {
        console.error(err);
        // Handle the error, display an error message, or redirect as needed
      });

  };

  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <h3>Editar datos de Usuario</h3>
        <a href="/" className='btn btn-dark btn-block'>Volver a Usuarios</a>
        <hr />
        <form id="formularioEditar">
          <input
            type="text"
            className='form-control my-2'
            name='first'
            id='firstInput'
            defaultValue={ufirst}
          />
          <input
            type='text'
            className='form-control my-2'
            name='last'
            id='lastInput'
            defaultValue={ulast}
          />
          <input
            type="text"
            className='form-control my-2'
            name='street'
            id='streetInput'
			// onChange={setStreet(usuario.street)}
            defaultValue={ustreet}
          />
          <input
            type="text"
            className='form-control my-2'
            name='city'
            id='cityInput'
            defaultValue={ucity}
          />
          <input
            type="text"
            className='form-control my-2'
            name='email'
            id='emailInput'
            defaultValue={uemail}
			autoComplete='off'
          />
			<input 
			type="text"
			className='form-control my-2'
			name='picture'
			id='pictureInput'
			defaultValue={upicture}
			/>
          <hr />

		  <table className='table'>
            <thead>
				<tr>
					<th>Imagen</th>
					<th>Nombre</th>
					<th>Apellido</th>
					<th>Dirección</th>
					<th>Ciudad</th>
					<th>Correo</th>
					{/* <th colSpan={2}>Acciones</th> */}
				</tr>
            </thead>
            <tbody>
                {
                         <tr key={usuario._id}>
                            <td><img src={usuario.picture} alt={usuario._id} className="rounded"/></td>
							<td>{usuario.first}</td>
                            <td>{usuario.last}</td>
							<td>{usuario.street}</td>
							<td>{usuario.city}</td>
							<td>{usuario.email}</td>
                        </tr>
                }
            </tbody>
            </table>



          <button className='btn btn-warning btn-block' onClick={handleUpdate}>Actualizar</button>
        </form>
      </div>
    </div>
  );
}




// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import { useParams, } from 'react-router';

// export default function EditUsuarios() {
// 	const { id } = useParams();
// 	const [usuario, setUsuario] = useState([]);

// 		useEffect(()=> {
// 			axios.get("http://localhost:3001/"+id)
// 			.then(result=> setUsuario(result.data)

// 			)})

// 		const formularioEditar = document.querySelector('#formularioEditar')
		
// 		const handleUpdate = (id) => {
// 			const first = document.querySelector('#first').value
// 			const last = document.querySelector('#last').value
// 			const street = document.querySelector('#street').value
// 			const city = document.querySelector('#city').value
// 			const email = document.querySelector('#email').value
// 			axios.put('http://localhost:3001/editUsuario/'+id , {first, last, street, city, email })
// 			.then(res=>console.log(res))
// 			.catch(err=>console.log(err));
// 		}


// 		return(

//         <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
 
// 			<div className='w-50 bg-white rounded p-3'>
// 				<h3>Editar datos de Usuario</h3>
// 				<a href="/" className='btn btn-dark btn-block'>Volver a Usuarios</a>
// 				<hr />
// 				<form id="formularioEditar" data-id={usuario._id}>
// 					<input 
// 						type="text"
// 						className='form-control my-2'
// 						name='first'
// 						id='firstInput'
// 						defaultValue={usuario.first}
// 					/>
// 					<input 
// 						type='text'
// 						className='form-control my-2'
// 						name='last'
// 						id='lastInput'
// 						defaultValue={usuario.last}
// 					/>
// 					<input 
// 						type="text"
// 						className='form-control my-2'
// 						name='street'
// 						id='streetInput'
// 						defaultValue={usuario.street}
// 					/>
// 					<input 
// 						type="text"
// 						className='form-control my-2'
// 						name='city'
// 						id='cityInput'
// 						defaultValue={usuario.city}
// 					/>
// 					<input 
// 						type="text"
// 						className='form-control my-2'
// 						name='email'
// 						id='emailInput'
// 						defaultValue={usuario.email}
// 					/>
// 					<input 
// 						type="text"
// 						className='form-control my-2'
// 						name='picture'
// 						id='pictureInput'
// 						defaultValue={usuario.picture}
// 					/>
// 					<hr />
// 					<button className='btn btn-warning btn-block' onClick={(e) => handleUpdate(usuario._id)} >Actualizar</button>
// 				</form>

// 	        </div>
//     	</div>
//     )

// }