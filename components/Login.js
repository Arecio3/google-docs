import { signIn } from "next-auth/client";
import Image from "next/image";
import Button from "@material-tailwind/react/Button";
import login from '../images/login.jpeg';
import googleLogin from "../images/googleLogin.png"

function Login() {
    return (
        <>
            <div className="fixed flex min-h-screen">
                    <h1 className="absolute z-40 text-center justify-center md:right-[33%] top-[10%] text-gray-400 text-5xl">Welcome to <span className="text-red-400">Documaker</span></h1>
                    <p className="absolute py-5 z-40 top-[21%] right-[30%] md:right-[45%] md:top-[15%] text-gray-400 test-xs">Click Google logo to login</p>
                <Image
                    src={login}
                    objectFit="cover"
                    className="min-w-full min-h-full"
                />
            </div>
            <div className="fixed top-[30%] right-[30%] md:top-[30%] right-[45%] bg-gray-400 rounded-full cursor-pointer hover:bg-gray-500">
                <img
                    src='https://img.icons8.com/plasticine/2x/google-logo.png'/>
            </div>
        </>

    )
}

export default Login