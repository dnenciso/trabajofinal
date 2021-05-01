import React from 'react'
import { useForm } from 'react-hook-form'

// creamos la funcion flecha editar_tabla 
const Editar_tabla = (props) => {
       // creamos este objeto objeto 
    const {register, errors, handleSubmit, setValue} = useForm({
        /* seleccionamos la propiedad defaulValues para recibir los valores por defecto 
        que va a tener nuestro formulario de editar*/
        defaultValues: props.currentUser
    });
     
    /* creamos estos setvalue para que se identifique que cambia
     el campo y con el props coloquemos la informacion*/
    setValue('name', props.currentUser.name)
    setValue('profesion', props.currentUser.profesion)
      
    // funcion flecha para enviar la informacion a la tabla
    const onSubmit = (data, e) => {
        // creamos data.id para asignarle el props currentuser id
        data.id = props.currentUser.id
        console.log(data)
        /* utilizamos nuestro props updateuser para recibir el current user id 
         mas el parametro data */
        props.updateUser(props.currentUser.id, data)
        e.target.reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input 
                type="text" 
                name="name"
                ref={register({required: {value: true, message: 'Valor requerido'}})}
                />
            <div className="event" >
                {errors?.name?.message}
            </div>
            <label>Profesion</label>
            <input 
                type="text" 
                name="profesion" 
                ref={register({required: {value: true, message: 'Valor requerido'}})}
                />
            <div className="event" >
                {errors?.username?.message}
            </div>
            <button type="submit">Actualizar Datos</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    );
}
 
export default Editar_tabla;