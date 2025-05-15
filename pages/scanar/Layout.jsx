import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>ScanAR - AR-Powered Warehouse Management</title>
                <meta name="description" content="ScanAR - Augmented Reality Warehouse Management System for efficient inventory tracking and management" />
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