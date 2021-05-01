import React, {useState} from 'react';
import Tabla_datos from './components/Tabla_datos';
import Form_usuario from './components/Formulario_usuario';
import Editar_tabla from './components/Editar_tabla';
import { v4 as uuidv4 } from 'uuid';

  // creo la funcion app

function App() {

  // aqui creo un array de objeto 
  // usamos la libreria uuid para la creacion de id automatico para el objeto id
  const usersData = [
   { id: uuidv4(), name: 'Jonathan Alonso', profesion: 'Ing Sistemas' },
   { id: uuidv4(), name: 'Cristian Diaz', profesion: 'Tec Sistemas' },
   { id: uuidv4(), name: 'Daniel Enciso Orjuela', profesion: 'Ing Sistemas' },
  ]
   
  // paso la informacion mediante el estado UseState
  const [users, setUsers] = useState(usersData)

  // agregamos la funcion de flecha llamada addUser la cual le asignamos como parametro un usuario para agregar el id automatico de la libreria 
  const addUser = (user) => {
    user.id = uuidv4()
    console.log(user)
    setUsers([
      ...users,
      user
    ])
  }

  // creamos la funcion fecha deleteUser 
  
  const deleteUser = (id) => {
    // nuevamente utilizamos el state para realizar el filtrado del id que traemos 
    // como parametro para la eliminacion del usuario
    setUsers(users.filter(user => user.id !== id))
    console.log(id)
  }

  /* creamos un state llamado editing que estara estabecido en falso 
  para poder pintar el formulario de edicion */
  const [editing, setEditing] = useState(false)

  /* creamos un state llamado currenuser para traer la informacion que
   ya esta en la tabla de datos del usuario */
  // para poderla pintar en el formulario de editar_tabla
  // con los datos del usuario id, name y profesion
    const [currentUser, setCurrentUser] = useState({
    id: null, name: '', profesion: '' 
  });

  // creamos una funcion editRow para resivir el usuario que vamos a modificar 
  const editRow = user => {
    setEditing(true) 
    /* nuevamente llamamos nuestro setEditing para llamar nuestro array user
    para poder validar si el id conincide con el id 
    o pintamos nuestro usuario actualizado*/
    setCurrentUser({ id: user.id, name: user.name, profesion: user.profesion })
  }
  /* creamos una funcion llamada updateuser para la actualiacion de la tabla_datos
  mediante un id y unos datos de usuario nuevo */
  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }
  

  // pasamos la informacion mediante los props 
  // mostramos la informacion de los stade 
  // mediante los component de editar_tabla, tabla_datos y formulario_usuario
  return (
    <div className="container">
      <h1>CRUD React Daniel Enciso</h1>
      <div className="flex-row">
        <div className="flex-large">
          
        {editing ? (
          <div>
            <h2>Editar usuario</h2>
            <Editar_tabla 
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div>
            <h2>Ingresar Nuevo Usuario</h2>
            <Form_usuario 
            addUser={addUser} />
          </div>
        )}
      </div>
        <div className="flex-large">
          <h2>Datos Usuarios</h2>
          <Tabla_datos
               users={users} 
               deleteUser={deleteUser}
               editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
