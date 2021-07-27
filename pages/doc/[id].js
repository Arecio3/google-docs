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

    if (!session) return <Login />;
    if (loading) return <Loading />;

    const router = useRouter();
    // Since we made the wild card with the name id it becpmes a query param
    // router.query.id
    const { id } = router.query;
    const [snapshot, loadingSnapshot] = useDocumentOnce(db.collection('userDocs')
    .doc(session.user.email)
    .collection("docs")
    .doc(id)
    );

    // if loading data is done and you dont have the filename in your db user gets redirected to home screen
    if (!loadingSnapshot && !snapshot?.data()?.fileName) {
        router.replace("/");
    }

    return (
        <div>
            <header className="flex justify-between items-center p-3 pb-1">
                <span onClick={() => router.push('/')} className="cursor-pointer">
                <Icon name="description" size="3xl" color="orange"/>
                </span>

                <div className="flex-grow px-2">
                    <h2>{snapshot?.data()?.fileName}</h2>
                    <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
                        <p className="options">File</p>
                        <p className="options">Edit</p>
                        <p className="options">View</p>
                        <p className="options">Insert</p>
                        <p className="options">Format</p>
                        <p className="options">Tools</p>
                    </div>
                </div>

                <Button 
                color="orange"
                buttonType="filled"
                size="regular"
                // put ! before class to make it important
                className="hidden md:!inline-flex h-10"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                >
                   <Icon name="people" size="md"/> 
                   Share
                </Button>

                <img src={session.user.image} className="rounded-full cursor-pointer h-10 w-10 ml-2" alt="" />
            </header>

            <TextEditor />
        </div>
    )
}

export default Doc

// Fetch user info on the server level
export async function getServerSideProps(context) {
    const session = await getSession(context)

    return {
        props: {
            session
        }
    }
}