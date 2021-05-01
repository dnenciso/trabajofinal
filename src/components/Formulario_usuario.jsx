import React from 'react';
import { useForm } from 'react-hook-form'  // llamamos el componente para el formulario 


// creamos la funcion  form_usuario
const Form_usuario = (props) => {
    

    /* creamos este objeto */
    const {register, errors, handleSubmit} = useForm();
    

    // creamos la funcion onsubmit para enviar la informacion a nuestro objeto
    const onSubmit = (data, e) => {
        data.id = null
        // recibimos el props addUser creado en app.js y le entregamos la informacion que ya tenemos en el data
        props.addUser(data)
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input placeholder = "INGRESA NOMBRE"
                type="text" 
                name="name"
                // creamos el objeto para validar si el campo tiene datos y si no tiene datos entregar el mensaje de Valor requerido
                ref={register({required: {value: true, message: 'Valor requerido'}})}
                />
            <div className="event" >
                {errors?.name?.message}
            </div>
            <label>Profesion</label>
            <input placeholder = "INGRESA TU PROFESION"
                type="text" 
                name="profesion" 
                // creamos el objeto para validar si el campo tiene datos y si no tiene datos entregar el mensaje de Valor requerido
                ref={register({required: {value: true, message: 'Valor requerido'}})}
                />
            
            <div className="event" >
                {errors?.profesion?.message}
            </div>
            <button type="submit">Nuevo Usuario</button>
        </form>
    );
}
 
export default Form_usuario;