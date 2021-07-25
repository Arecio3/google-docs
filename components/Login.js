import { signIn } from "next-auth/client";
import Image from "next/image";
import Button from "@material-tailwind/react/Button";
import login from '../images/login.jpeg';

function Login() {
    return (
        <div>
            <Image 
            src={login}
            objectFit="cover"
            />
        </div>
    )
}

export default Login