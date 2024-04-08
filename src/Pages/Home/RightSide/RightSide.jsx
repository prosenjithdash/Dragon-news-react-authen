import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../../src/assets/qZone1.png'
import qZone2 from '../../../../src/assets/qZone2.png'
import qZone3 from '../../../../src/assets/qZone3.png'


const RightSide = () => {
    return (
        // Login Section
        <div className="lg:w-[282px]">

            {/* Login Section */}
            <section>
                <h2 className="text-[20px]  font-extrabold mb-[20px]">Login With</h2>
                <div className="border-2 font-semibold border-black rounded-lg hover:border-blue-600 hover:text-blue-600 flex gap-2 items-center justify-center py-2 hover:font-extrabold">
                    <FaGoogle />
                    <h3 className="text-[20px]">Login with Google</h3>


                </div>

                <div className="border-2 font-semibold border-black rounded-lg hover:border-blue-600 hover:text-blue-600 flex gap-2 mt-[10px] items-center justify-center py-2 hover:font-extrabold ">
                    <FaGithub />
                    <h3 className="text-[20px]">Login with Google</h3>


                </div>
            </section>

            {/* Find Us On Section */}
            <section className="flex-cols justify-center mt-[20px]">
                <h2 className="text-[20px] font-extrabold mb-[20px]">Find Us On</h2>

                <a className="p-4 flex text-lg items-center border border-black rounded-t-lg text-[20px]" href=''>
                    <FaFacebook className="mr-3"></FaFacebook>
                    <span className="text-[20px]">Facebook</span>
                </a>

                <a className="p-4 flex text-lg items-center border-x border-black  text-[20px]" href=''>
                    <FaTwitter className="mr-3"></FaTwitter>
                    <span className="text-[20px]">Twitter</span>
                </a>

                <a className="p-4 flex text-lg items-center border border-black rounded-b-lg text-[20px]" href=''>
                    <FaInstagram className="mr-3"></FaInstagram>
                    <span className="text-[20px]">Instagram</span>
                </a>
            </section>

            {/* Q-Zone Section */}
            <section className="p-4 space-y-3 mb-6 bg-[#F3F3F3] mt-[20px]">
                <h2 className="text-[20px] font-extrabold mb-[20px]">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </section>

            {/* Q-Zone Section */}
            <section>
                <div className="bg-[url('../../../../src/assets/bg.png')] p-8 ">
                    <div className="text-white flex-col justify-center text-center pb-[50px]">
                        <h2 className="text-[30px] font-bold mb-[30px] mt-[40px]">Create an Amazing Newspaper</h2>

                        <h2 className="mb-[30px]">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</h2>

                        <button className="py-6 border-0  px-8 bg-[#D72050] text-white">
                            <h2 className="text-[20px] font-bold ">Learn More</h2>
                        </button>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default RightSide;