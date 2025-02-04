import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const AuthRoute = ({children}) =>{
    const loginStatus = useSelector((state) => state.user.loginStatus)
    console.log('loginStatus', loginStatus)

    if(loginStatus === 'true'){
        return <>{children}</>
    }else{
        return <Navigate to={'/login'}  />
    }
}


export default AuthRoute