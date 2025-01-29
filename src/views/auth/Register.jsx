import { Link, useNavigate } from "react-router-dom"
import {FaGoogle, FaFacebook} from 'react-icons/fa'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {PropagateLoader} from 'react-spinners'
import { overrideStyle } from "../../utils/utils"
import { seller_register, messageClear } from "../../store/Reducers/authReducer"
import toast from "react-hot-toast"


const Register = () => {

    const navigate = useNavigate()
    const {loader, successMessage, errorMessage} = useSelector(state => state.auth)
    // console.log(loader);
    const dispatch = useDispatch()    

    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setState({...state, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(state);
        dispatch(seller_register(state))
        
    }

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            navigate('/')
        }
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
        
    }, [successMessage, errorMessage])



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
                    <h2 className="text-xl mb-3 font-bold">
                        Welcome to Fast Shop
                    </h2>
                    <p className="text-sm mb-3 font-medium">
                        Please register your account
                    </p>
                    <form onSubmit={handleSubmit}>
                    <div className="flex flex-col w-full gap-1 mb-3">
                        <label htmlFor="name">Name</label>
                        <input className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                        type="text" name="name" value={state.name} onChange={handleChange} placeholder="Name" id="name" required />
                    </div>
                    <div className="flex flex-col w-full gap-1 mb-3">
                        <label htmlFor="email">Email</label>
                        <input className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                        type="email" name="email" value={state.email} onChange={handleChange} placeholder="Email" id="email" required />
                    </div>
                    <div className="flex flex-col w-full gap-1 mb-3">
                        <label htmlFor="name">Password</label>
                        <input className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                        type="password" name="password" value={state.password} onChange={handleChange} placeholder="Password" id="password" required />
                    </div>

                    <div className="flex items-center w-full gap-3 mb-3">
                        <input className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200
                        rounded border-gray-300 focus:ring-blue-500"
                         type="checkbox" name="checkbox" id="checkbox" required/>
                         <label htmlFor="checkbox">I agree to privacy policy & terms</label>
                    </div>

                    <button disabled={loader ? true : false}
                            className="bg-slate-800 w-full hover:shadow-blue-300/50 
                    hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
                        >
                            {
                                loader ? <PropagateLoader color="#fff" cssOverride={overrideStyle} /> : 'Sign Up'
                            }
                        </button>

                    <div className="flex items-center mb-3 gap-3 justify-center">
                        <p>Already have an account ? <Link className="font-bold" to="/login">Sign In</Link></p>
                    </div>

                    <div className="w-full flex justify-center items-center mb-3">
                        <div className="w-[45%] bg-slate-700 h-[1px]"></div>
                        <div className="w-[10%] flex justify-center items-center">
                            <span className="pb-1">Or</span>
                        </div>
                        <div className="w-[45%] bg-slate-700 h-[1px]"></div>
                    </div>

                    <div className="flex justify-center items-center gap-3">
                        <div className="w-[135px] h-[35px] flex rounded-md
                        bg-orange-700 shadow-lg hover:shadow-orange-700/50
                        justify-center cursor-pointer items-center overflow-hidden
                        "><span><FaGoogle/></span></div>
                    

                    
                        <div className="w-[135px] h-[35px] flex rounded-md
                        bg-blue-700 shadow-lg hover:shadow-blue-700/50
                        justify-center cursor-pointer items-center overflow-hidden
                        "><span><FaFacebook/></span>
                        </div>
                    </div>
                </form> 
                </div>
            </div>
            
        </div> 
    )
}

export default Register