import { Navigate } from "react-router";
import CategoryNews from "../Componenets/CategoryNews";

const Home = () => {
    return (
        <div>
           <Navigate to='/category/0'></Navigate>
        </div>
    );
};

export default Home;