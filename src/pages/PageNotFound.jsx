import { Link } from "react-router-dom";

const PageNotFound = () => { 
    return(
        <>
            <h1>404</h1>
            <Link to="/" className="btn btn-dark">Volver al incio</Link>
        </>
    )
 }

 export default PageNotFound;