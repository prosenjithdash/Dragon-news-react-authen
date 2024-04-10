import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews/BreakingNews";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSide";
import NewsCard from "../../Components/NewsCard/NewsCard";

const Home = () => {

    const newsData = useLoaderData();
    console.log(newsData)

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className="lg:flex lg:gap-[20px]">
                {/* All Category  */}
                <LeftSide></LeftSide>

                {/* Dragon News Home */}
                <div className="lg:w-[558px]">
                    <h2 className="text-[20px] font-bold">Dragon News Home</h2>

                    <div className="">
                        {
                            newsData.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
                        }
                    </div>
                </div>

                {/* Login Section */}
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default Home;