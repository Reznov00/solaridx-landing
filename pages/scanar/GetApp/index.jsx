import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";
import GetAppForm from "../GetAppForm";

const GetApp = () => {
    return (
        <>
            <Head>
                <meta name='robots' content='index' />
                <title>Get the ScanAR Warehouse Management App</title>
            </Head>
            <GetAppForm />
        </>
    );
};

export default GetApp; 