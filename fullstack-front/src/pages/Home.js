import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [users, setUsers] = React.useState([])

    const {id} = useParams()

    useEffect(() =>{
        loadUsers();
    },[]);

    const loadUsers = async() =>{
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }

    const deleteUsers = async(id) =>{
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    }

  return (
    <div className='container'>
          <div className='py-4'>
              <table className="table border shadow">
                  <thead>
                      <tr>
                          <th scope="col">#</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Usuario</th>
                          <th scope="col">Email</th>
                          <th scope="col">Accion</th>
                      </tr>
                  </thead>
                  <tbody>
                    {
                        users.map((user, index) => (
                            <tr>
                                <th scope="row" key={index}>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>

                                <Link className='btn btn-primary mx-2'
                                to={`/viewuser/${user.id}`}>Ver</Link>
                                <Link className='btn btn-outline-primary mx-2'
                                to={`/edituser/${user.id}`}
                                >Editar</Link>
                                <button className='btn btn-danger mx-2'
                                onClick={() => deleteUsers(user.id)}
                                
                                >Eliminar</button>
                                
                                
                            </tr>))

                    }
                      
                      
                  </tbody>
              </table>
          </div>
    </div>
  )
}
