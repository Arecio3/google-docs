import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useSession, signOut } from "next-auth/client";

function Header() {
    const [session] = useSession();
    return (
        // By default bg-transparent
        <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
            <Button
                color="gray"
                buttonType="outline"
                rounded={true}
                iconOnly={true}
                ripple="dark"
                className="hidden md:inline-flex h-20 w-20 border-0"
            >
                <Icon name="menu" size="3xl" color="gray" />
            </Button>
            <Icon name="description" size="5xl" color="orange" />
            <h1 className="hidden md:inline-flex ml-2 text-gray font-extralight text-2xl italic">Documaker</h1>

            {/* Focus-within means when child gets focus on then apply these styles */}
            <div className="flex flex-grow items-center px-5
             py-2 bg-gray-100 text-gray-600 rounded-lg group mx-5 md:mx-20 focus-within:shadow-md">
                <Icon name="search" size="3xl" color="gray" />
                {/* Flex-grow lets you see the text till the end */}
                <input type="text" placeholder="search" className="flex-grow px-5 text-base bg-transparent outline-none" />
            </div>

            <Button 
            color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="hidden md:inline-flex ml-5 md:ml-20 h-20 w-30 border-0"
            >
            <Icon name="apps" size="3xl" color="gray"/>
            </Button>
            <img 
            loading="lazy"
            onClick={signOut}
            className="cursor-pointer h-12 w-12 rounded-full ml-2"
            src={session?.user?.image}
             />
        </header>
    )
}

export default Header
