import 'tailwindcss/tailwind.css'
import "@material-tailwind/react/tailwind.css";
import Head from 'next/head';
import { Provider } from "next-auth/client";
import '../styles.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Material Icons Link */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      {/* Higher order component that gives access to session through provider */}
      <Provider session={pageProps.session}>
      <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
