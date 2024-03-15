import { Login } from '../components/login/Login';
import { errorSesion } from '../components/error/errorSesion';
import { ErrorPantalla } from '../components/error/Error';

export default [
    {
        path: "/login",
        page: Login
    },
    {
        path: "error",
        page: ErrorPantalla
    },
    {
        path: "error404",
        page: errorSesion
    }
]
