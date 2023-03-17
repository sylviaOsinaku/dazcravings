import { useRouteError } from 'react-router-dom';
import errorImage from '../icons/error.svg';
import classes from './ErrorPage.module.css';
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className={classes['error-container']}>
      <img src={errorImage} alt="An error mesage" />
      <div>
        <p>Page not found</p>
        <h1>Oops! Error 404</h1>
        <p>
          Maybe <span>tesRobot</span> has screwed out this page
        </p>
        {/* <p>
          <i>{error.statusText || error.message}</i>
        </p> */}
        <div>
          <p>Back to homepage</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
