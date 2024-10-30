import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PageContent from '../../components/pageContent/PageContent';

const defaultValues = {
  inputNameValue: '',
  inputLastNameValue: ''
}

const FormCareer = (id = null, values = defaultValues) => {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: values })

  const onSubmit = async (values) => {
    // try {
    //   const body = {
    //     name: values.inputNameValue,
    //     lastname: values.inputLastNameValue
    //   };

    //   if (id) {
    //     await fetch(`/api/students/${id}`, {
    //       method: 'PUT',
    //       body: JSON.stringify(body)
    //     }
    //     );
    //   } else {
    //     await fetch('/api/students', {
    //       method: 'POST',
    //       body: JSON.stringify(body)
    //     });
    //   }
    // } catch (error) {
    //   alert(error);
    // }
  }

  return (
    <PageContent
      headerTitle='Formulario'
      actions={ [
        <button key='back' onClick={ () => navigate(-1) }>Atras</button>
      ] }
    >
      <form onSubmit={ handleSubmit(onSubmit) }>
        <div>
          <label>Nombre:</label>
          <input { ...register('inputNameValue', { 
            required: 'Nombre es requerido',
            maxLength: {
              value: 5,
              message: 'Nombre no puede ser mayor a 5 caracteres'
            }
           }) } />
           <p>{ errors.inputNameValue?.message }</p>
        </div>
        <div>
          <label>Apellido:</label>
          <input { ...register('inputLastNameValue') } />
        </div>
        <button type='submit'>Guardar</button>
      </form>
    </PageContent>
  );
};

export default FormCareer;
