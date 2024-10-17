import { useRouteError } from 'react-router-dom';

const ErrorNotFoundPage = () => {
  const error = useRouteError();

  return (
    <div>
      <p>Perdón, hubo un error</p>
      <p>
        <i> { error.statusText || error.message } </i>
      </p>
    </div>
  );
};

export default ErrorNotFoundPage;
