import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
// Dynamic import that imports and grabs module needed but only does it for client side not ssr because node.js is ran on server and does not have access to window object
const Editor = dynamic(() => import('react-draft-wysiwyg').then((module) => module.Editor), {
    ssr: false,
});

function TextEditor() {
    return (
        <div className="bg-[#F8F9FA] min-h-screen pb-16">
            <Editor 
            toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
            editorClassName="mt-6 p-10 bg-white shadow-lg max-w-6xl mx-auto mb-12 border"
            />
        </div>
    )
}

export default TextEditor
