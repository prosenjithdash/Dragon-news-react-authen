
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {

    // login user step - 3
    const { signIn } = useContext(AuthContext);

    // // Navigate after login step - 02
    // const navigate = useNavigate();


    const handleLogin = e => {

        e.preventDefault();
        
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password);

        const form = new FormData(e.currentTarget);

                const email = form.get('email')
                const password = form.get('password')

                console.log(email, password)

        // login user step - 4
        signIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                alert('Login Successfully.')

                // Navigate after login step - 01
                e.target.reset();

                // // Navigate after login step - 03
                // navigate('/');

            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                alert('Wrong email or password.Try again...')
            });

    }
    return  (
        <div className="">
            <Navbar></Navbar>
            <div className=" lg:w-1/2 mx-auto  text-center">
                <form onSubmit={handleLogin} className="card-body bg-gray-200 ">
                    <h2 className="text-[35px] font-bold text-center">Login your account</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>

                    <h2>Do not Have An Account ? Please<Link to='/register'><button className="btn btn-active btn-link text-red-500 font-bold">Register</button>
                    </Link>
                    </h2>
                </form>
            </div>
        </div>
    );
    
};

export default Login;