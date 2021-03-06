import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";

function DocumentRow({ id, date, fileName }) {
    const router = useRouter();

    return (
        <div onClick={() => router.push(`/doc/${id}`)}className="flex items-center p-4 rounded-lg cursor-pointer hover:bg-gray-100 text-sm">
            <Icon name="article" size="3xl" color="orange"/>
            <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
            <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>
            
            <Button
            color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="border-0"
            >
            <Icon name="more_vert" size="3xl" />
            </Button>
        </div>
    )
}

export default DocumentRow
