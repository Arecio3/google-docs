import TextEditor from "../../components/TextEditor";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";
import { db } from "../../backend/firebase";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { getSession, signOut, useSession } from "next-auth/client";
import Login from "../../components/Login";
import Loading from "../../components/Loading";

function Doc() {
    const [session, loading] = useSession();

    if (loading) return <Loading />;
    if (!session) return <Login />;

    return (
        <div>
            <header className="flex justify-between items-center p-3 pb-1">
                <span onClick={() => router.push('/')}>
                <Icon name="description" size="3xl" color="orange"/>
                </span>
            </header>
        </div>
    )
}

export default Doc
