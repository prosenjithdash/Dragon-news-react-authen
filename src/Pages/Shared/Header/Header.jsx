import logo from '../../../../src/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <div className='flex justify-center lg:mt-[50px]  mt-[30px] mb-[16px] lg:mb-[20px]'>
                <img className='text-center ' src={logo} alt="" />

            </div>
            <h2 className='text-[18px] text-[#706F6F] pb-[10px]'>Journalism Without Fear or Favour</h2>
            <h3 className='text-[20px] text-[#706F6F] pb-[30px]'>{moment().format("dddd, MMMM Do YYYY")}</h3>
        </div>
    );
};

export default Header;