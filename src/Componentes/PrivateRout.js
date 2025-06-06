import { Navigate } from "react-router-dom";

function PrivateRout({element: Components, user, requiredRole}){

    return user.role === requiredRole ? Components : <Navigate to={"/negado"}/>;

}

export default PrivateRout;