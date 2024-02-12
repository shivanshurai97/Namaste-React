import { useRouteError } from "react-router-dom";

const Error = () => {
  // hook used to get the error info
  const err = useRouteError();

  return (
    <div className="text-center">
      <h1>Oops !!</h1>
      <h2>Something went wrong...</h2>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
