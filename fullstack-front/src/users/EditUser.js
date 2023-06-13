import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

  let navigate= useNavigate()
  const {id} = useParams()



  const [user, setUser]=useState({
    name: '',
    username: '',
    email: ''

  })
  const{name,username,email}=user
  const onInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
    };

    useEffect(()=>
    {
      loadUser()
    },[])
    
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8080/user/${id}`,user)
      navigate('/')
    }

    const loadUser = async () => {
        const result= await axios.get(`http://localhost:8080/user/${id} `)
        setUser(result.data)
      }

  return (
    <div className='container'>
      <div className='row'>
              <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>Editar Usuario</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                  <label htmlFor='Name' className='form-label'>Nombre</label>
                  <input type={"text"} className='form-control' name='name' placeholder='Ingrese su nombre' value={name} onChange={(e)=> onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                  <label htmlFor='Username' className='form-label'>Nombre de Usuario</label>
                  <input type={"text"} className='form-control' name='username' placeholder='Ingrese su nombre de usuario' value={username} onChange={(e)=> onInputChange(e)}/>
                </div>
                <div className='mb-3'>
                  <label htmlFor='Email' className='form-label'>Email</label>
                  <input type={"text"} className='form-control' name='email' placeholder='Ingrese su correo' value={email} onChange={(e)=> onInputChange(e)} />
                </div>
                <button type='submit' className='btn btn-outline-primary'>Aceptar</button>
                <Link className='btn btn-outline-danger mx-2' to="/">Cancelar</Link>
                </form>
                </div>
      </div>
    </div>
  )
}