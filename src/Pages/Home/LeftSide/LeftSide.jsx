import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {

    // load data step - 01
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    },[])
    return (
        <div className="lg:w-[267px]">
            {/* All Category  */}
            <h2 className="text-[20px] mb-[20px] font-extrabold">All Category</h2>

            {/* <div>
                <h2 className="border-0 hover:rounded-lg hover:bg-[#E7E7E7] py-[17px] hover:text-black text-[#9F9F9F] text-[20px] font-bold text-center">National News</h2>
                <h2 className="border-0 hover:rounded-lg hover:bg-[#E7E7E7] py-[17px] hover:text-black text-[#9F9F9F] text-[20px] text-center font-bold">National News</h2>
            </div> */}

            <div>
                {
                    category.map(item =>   <Link to={`/category/${item.id}`} key={item.id} className="border-0 block hover:rounded-lg hover:bg-[#E7E7E7] p-[17px] pl-[50px] hover:text-black text-[#9F9F9F] text-[20px] font-bold ">{item.name}</Link>  )
                }
            </div>
        </div>
    );
};

export default LeftSide;