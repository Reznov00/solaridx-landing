import Head from "next/head";
import Navbar from "../pages/scanar/Navbar";
import Footer from "../pages/scanar/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>SolariDX</title>
                <meta name="description" content="SolariDX making it simple for you to build and grow your SaaS applications, or any business idea" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
