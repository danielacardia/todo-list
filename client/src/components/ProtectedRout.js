import { Navigate, Outlet } from "react-router-dom";

const ProtectedRout = () => {
  const token = localStorage.getItem("token");

  //valide si el usuario está loggeado o no
  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  } // ruta a la que queremos llevar
}; // al usuario si no está autenticado

export default ProtectedRout;
