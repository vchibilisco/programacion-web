import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailCareers = () => {
  const params = useParams();

  const [detail, setDetail] = useState({});
  const [fetchingDetail, setFetchingDetail] = useState(false);

  useEffect(() => {
    fetchDetail();
  }, []); // eslint-disable-line  react-hooks/exhaustive-deps

  const fetchDetail = async () => {
    try {
      const response = await fetch(`/api/careers/${params.id}`, {
        method: 'GET'
      });

      const data = await response.json();
      setDetail(data);
    } catch (error) {
      console.error(error);
    } finally {
      setFetchingDetail(false);
    }
  };

  return (
    <div>
      Detalle de Carrera

      {
        fetchingDetail
          ? <p>Recuperando información de la carrera...</p>
          : <>
            <p>Nombre: { detail.name }</p>

            <p>Niveles:</p>
            {
              !detail.levels?.length
                ? <p>No tengo niveles en esta Carrera</p>
                : <ul>
                  {
                    detail.levels.map(level => <li key={ level.id }> { level.name } </li> )
                  }
                </ul>
            }
          </>
      }
    </div>
  );
};

export default DetailCareers;
