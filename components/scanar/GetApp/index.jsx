import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";
import GetAppForm from "../GetAppForm";

const GetApp = () => {
    return (
        <>
            <Head>
                <meta name='robots' content='index' />
                <title>Get the ScanAR App | SolariDX</title>
            </Head>
            <Navbar />
            <GetAppForm />
            <Footer />
        </>
    );
};

export default GetApp; 