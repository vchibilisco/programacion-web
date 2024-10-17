import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { careersMock } from "./careers";

const CareerForm = () => {
  const [ inputValue, setInputValue ] = useState('');

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const detail = careersMock.find(career => career.id === Number(params.id));

    setInputValue(detail.name);
  }, [params.id]);

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(inputValue);
    const arrayMapOfIdCareer = careersMock.map(item => item.id);
    const index = arrayMapOfIdCareer.indexOf(Number(params.id));

    const careerToUpdate = careersMock.find(item => item.id === Number(params.id));

    const newCareer = {
        ...careerToUpdate,
        name: inputValue
    };

    careersMock.splice(index, 1, newCareer);

    navigate(-1);
  };

  return (
    <div>
      <h1>Editar Carrera con Id { params.id }</h1>
      <div>
        <form onSubmit={ onSubmit }>
          <label>Nombre:</label>
          <input type="text" value={ inputValue } onChange={ (evt) => setInputValue(evt.target.value) } />
          <div>
            <button type="submit">Actualizar</button>
            <button onClick={ () => navigate(-1) }>Volver atras</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerForm;
