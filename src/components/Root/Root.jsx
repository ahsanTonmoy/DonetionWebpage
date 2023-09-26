import { Outlet } from "react-router-dom";
import Hesder from "../header/Hesder";

const Root = () => {
    return (
        <div>
            <Hesder></Hesder>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;