import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, messageClear } from "../../store/Reducers/authReducer";
import {PropagateLoader} from 'react-spinners'
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { overrideStyle } from "../../utils/utils";

const AdminLogin = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {loader, errorMessage, successMessage} = useSelector(state => state.auth)

    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(admin_login(state))
        // console.log(state);
    };

    

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            navigate('/')
        }
    }, [errorMessage, successMessage])

    return (
        <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
            <div className="w-[350px] text-[#fff] p-2">
                <div className="bg-[#6f68d1] p-4 rounded-md">
                    <div className="h-[70px] flex justify-center items-center">
                        <div className="w-[180px] h-[50px]">
                            <img
                                className="w-full h-full"
                                src="http://localhost:3000/images/shop-logo.png"
                                alt="logo-image"
                            />
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                                type="email"
                                name="email"
                                value={state.email}
                                onChange={handleChange}
                                placeholder="Email"
                                id="email"
                                required
                            />
                        </div>
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="name">Password</label>
                            <input
                                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                                type="password"
                                name="password"
                                value={state.password}
                                onChange={handleChange}
                                placeholder="Password"
                                id="password"
                                required
                            />
                        </div>

                        <button disabled={loader ? true : false}
                            className="bg-slate-800 w-full hover:shadow-blue-300/50 
                    hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
                        >
                            {
                                loader ? <PropagateLoader color="#fff" cssOverride={overrideStyle} /> : 'Login'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;