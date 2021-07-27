import { useState, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import { db } from "../backend/firebase";
import { EditorState } from "draft-js";
import { useRouter } from "next/dist/client/router";
import Draft from "draft-js";
import { convertFromRaw, convertToRaw } from "draft-js";
import { useSession } from "next-auth/client";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
// Dynamic import that imports and grabs module needed but only does it for client side not ssr because node.js is ran on server and does not have access to window object
const Editor = dynamic(() => import('react-draft-wysiwyg').then((module) => module.Editor), {
    ssr: false,
});

function TextEditor() {
    const [session] = useSession();
    // State of text editor
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const router = useRouter();
    const { id } = router.query;

    const [snapshot] = useDocumentOnce(
        db.collection("userDocs").doc(session.user.email).collection("docs").doc(id)
    );

    // Takes editor state from last snapshot and showing runs on every new instance of a snapshot or refresh
    useEffect(() => {
        if (snapshot?.data()?.editorState) {
            setEditorState(
                Draft.EditorState.createWithContent(
                    convertFromRaw(snapshot?.data()?.editorState)
                )
            );
        }
    }, [snapshot]);

    //  Tracks editor state
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);

        // Pushes doc into db
        db.collection('userDocs').doc(session.user.email).collection('docs').doc(id).set({
            // Taking editor states current content and converts it to JSON
            editorState: convertToRaw(editorState.getCurrentContent())
        }, {
            // We do this so we don't erase old information
            merge: true
        })
    }

    return (
        <div className="bg-[#F8F9FA] min-h-screen pb-16">
            <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
                editorClassName="mt-6 p-10 bg-white shadow-lg max-w-6xl mx-auto mb-12 border"
            />
        </div>
    )
}

export default TextEditor
