import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="max-w-[1440px] p-4 mx-auto  ">
            <div className="lg:w-[1140px]  mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;