import React from 'react'


// creo  la funcion flecha llamada tabla_datos 
const Tabla_datos = (props) => (
  <table>
    <thead>
      <tr>
        <th>NOMBRE</th>
        <th>PROFESION</th>
        <th>FUNCION</th>
      </tr>
    </thead>
    <tbody>
        {
            // llamamos el props users para traer los datos de usuarios 
            props.users.length > 0 ? (
                props.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.profesion}</td>
                        <td>
                        <button 
                            className="button muted-button"
                            /* creamos la funcion fecha mediante el evento onclick 
                            para editar informacion del usuario con el props editrow  mediante el formulario editar usuario */
                            onClick={() => {
                                props.editRow(user)
                            }}
                            >
                            Editar
                        </button>
                        <button 
                            className="button muted-button"
                            // creamos la funcion fecha  mediante el evento onclick para la eliminacion del usuario,
                            // lo que hacemos es llamar el props delete user 
                            onClick={() => props.deleteUser(user.id)}
                            >
                            Eliminar
                        </button>
                        </td>
                    </tr>
                ))

                // si no hay usuarios creamos la respuesta
            ) : (
                <tr>
                    <td colSpan={3}>No hay usuarios creados</td>
                </tr>
            )
        }

      
    </tbody>
  </table>
)

export default Tabla_datos;