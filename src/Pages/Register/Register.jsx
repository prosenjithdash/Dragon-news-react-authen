import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    
    // use context
    const { createUser } = useContext(AuthContext);

        const handleLogIn = (e) => {
            e.preventDefault();
            // const name = e.target.name.value;
            // const email = e.target.email.value;
            // const password = e.target.password.value;
            // console.log(email, password)



            console.log(e.currentTarget);
            const form = new FormData(e.currentTarget);

            const name = form.get('name')
            const email = form.get('email')
            const password = form.get('password')

            console.log(name, email, password)
            
            // create user
            createUser(email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
                    // ...
                    alert('Successfully User Created')
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(errorMessage)
                    alert('Wrong User , Please try again...2121Z                      Z Z    ¯')
                });
            
            }
        return (
            <div className="">
                <Navbar></Navbar>
                <div className=" lg:w-1/2 mx-auto  text-center">
                    <form onSubmit={handleLogIn} className="card-body bg-gray-200 ">
                        <h2 className="text-[35px] font-bold text-center"> Register your account </h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
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
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>

                        <h2>Have An Account ? Please<Link to='/logIn'><button className="btn btn-active btn-link text-red-500 font-bold">Login</button>
                        </Link>
                        </h2>
                    </form>
                </div>
            </div>
        );
    };

export default Register;