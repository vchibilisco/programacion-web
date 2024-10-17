import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { careersMock } from "./careers";

const CareerDetail = () => {
  const [ careerDetail, setCareerDetail ] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const detail = careersMock.find(career => career.id === Number(params.id));

    setCareerDetail(detail);
  }, [params.id]);

  return (
    <div>
      <h1>Detalle de Carrera con Id { careerDetail.id }</h1>
      <div>
        <span> Nombre: { careerDetail.name } </span>
      </div>
      <button onClick={ () => navigate(-1) }>Volver atras</button>
    </div>
  );
};

export default CareerDetail;
