import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews/BreakingNews";
import LeftSide from "./LeftSide/LeftSide";
import MiddleSide from "./MiddleSide/MiddleSide";
import RightSide from "./RightSide/RightSide";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="lg:flex lg:gap-[20px]">
                {/* All Category  */}
                <LeftSide></LeftSide>

                {/* Dragon News Home */}
                <MiddleSide></MiddleSide>

                {/* Login Section */}
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default Home;