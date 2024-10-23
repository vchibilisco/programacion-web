import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContent from "../../components/pageContent/PageContent";

const ListCareers = () => {
  const navigate = useNavigate();

  const [careers, setCareers] = useState([]);
  const [fetchingCareers, setFetchingCareers] = useState(false);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      setFetchingCareers(true);
      const response = await fetch('/api/careers', {
        method: 'GET'
      });

      const data = await response.json();
      setCareers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setFetchingCareers(false);
    }
  };

  return (
    <PageContent
      headerTitle="Listar Carreras"
      actions={ [
        <button key='report'>Reporte</button>,
        <button key='download'>Descargar</button>,
        <button key='add' onClick={() => navigate('/careers/form')}>Agregar</button>
      ] }
    >
      {
        fetchingCareers
          ? <p>Por favor espere, recuperando información...</p>
          : <>
            {
              !careers.length && <p>No posee carreras cargadas</p> 
            }

            <table border={ 1 }>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Número de Niveles</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  careers.map(career => (
                    <tr key={ career.id }>
                      <td> { career.id } </td>
                      <td> { career.name } </td>
                      <td> { career.levels.length } </td>
                      <td> <button onClick={() => navigate(`/careers/${career.id}`)} >Ver detalle</button> </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </>
      }
    </PageContent>
  );
};

export default ListCareers;
