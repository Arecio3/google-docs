import Head from 'next/head';
import Header from '../components/Header';
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { getSession, useSession } from "next-auth/client";
import Login from "../components/Login";
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import { useState } from 'react';

export default function Home() {
  // This hook will grab the client info
  const [session, loading] = useSession();
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");

  if (!session) return <Login />;

  const createDocument = () => {

  }

  const modal = (
    <Modal
      size="small"
      active={showModal}
      toggler={() => setShowModal(false)}
    >
      <ModalBody>
        <input 
        value={input}
        // Updates state
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="outline-none w-full"
        placeholder="Enter document name"
        onKeyDown={(e) => e.key === "Enter" && createDocument()}
        />
      </ModalBody>
      <ModalFooter>
        <Button
        color="red"
        buttonType="link"
        onClick={(e) => setShowModal(false)}
        ripple="dark"
        >
          Cancel
        </Button>
        <Button color="orange" onClick={createDocument} ripple="light">
          Create
        </Button>
      </ModalFooter>
    </Modal>
  )

  return (
    <div>
      <Head>
        <title>Documaker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {modal}
      <section className="bg-[#F8F9FA] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-gray-700 text-lg">Start a new document</h2>

            <Button
              color="gray"
              buttonType="outline"
              iconOnly={true}
              ripple="dark"
              className="border-0"
            >
              <Icon name="more_vert" size="3xl" />
            </Button>
          </div>
          <div>
            {/* Convert img to WP Format also optimizes for screen size */}
            <div onClick={() => setShowModal(true)} className="relative h-50 w-40 border-2 cursor-pointer hover:border-red-300">
              <img src="https://media.istockphoto.com/vectors/cross-plus-medical-icon-design-template-elements-vector-id487552824?k=6&m=487552824&s=612x612&w=0&h=M2LHlaVwe9ZMz8883eUjEt3keKlUibsFKfPLUFFqeEI=" loading="lazy" alt="" />
            </div>

            <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Blank</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow"><span className="color-gray-500">{session?.user?.name}'s</span> Documents</h2>
            <p className="mr-12">Date Created</p>
            <Icon name="folder" size="3xl" color="orange" />
          </div>
        </div>
      </section>

    </div>
  )
}

// The context holds all the info on the user request 
export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  }
}