import { useNavigate } from "react-router-dom";
import { getCareers } from "./careers";
import { useEffect, useState } from "react";

const CareersPage = () => {
  const [ careers, setCareers ] = useState([]);
  const [ fetchingCareers, setFetchingCareers ] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    setFetchingCareers(true);
    const response = await fetch('/api/careers', {
      method: 'GET'
    });
    const data = await response.json();
    setCareers(data);
    setFetchingCareers(false)
  };

  return (
    <div>
      <h1>Listado</h1>
      {
        fetchingCareers
          ? <p>Por favor espere, estamos obteniendo la información</p>
          : <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                careers.map(career => (
                  <tr key={ career.id }>
                    <td>{ career.id }</td>
                    <td>{ career.name }</td>
                    <td>
                      <button
                        onClick={ () => navigate(`/careers/${career.id}`) }
                      >
                        Ver
                      </button>
                      <button
                        onClick={ () => navigate(`/careers/${career.id}/edit`) }
                      >
                        Editar
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table> 
      }
    </div>
  );
};

export default CareersPage;
