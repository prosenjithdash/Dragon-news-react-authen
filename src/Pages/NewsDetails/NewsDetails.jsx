import { useParams } from "react-router-dom";
import RightSide from "../Home/RightSide/RightSide";
import Navbar from "../Shared/Navbar/Navbar";
import Header from "../Shared/Header/Header";

const NewsDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-3xl">
                        News Details {id}
                    </h2>
                </div>
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default NewsDetails;