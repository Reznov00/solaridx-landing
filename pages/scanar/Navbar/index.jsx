import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NavLink from '../../../components/NavLink'
import Image from 'next/image'

const Navbar = () => {
    const [state, setState] = useState(false)
    const router = useRouter();
    const { events } = router;

    const navigation = [
        { title: "Home", path: "/" },
        { title: "About ScanAR", path: "#about" },
    ]

    useEffect(() => {
        // Close the navbar menu when navigate
        const handleState = () => {
            document.body.classList.remove("overflow-hidden")
            setState(false)
        }
        events.on("routeChangeStart", () => handleState());
        events.on("hashChangeStart", () => handleState());
    }, [])

    const handleNavMenu = () => {
        setState(!state)
        document.body.classList.toggle("overflow-hidden")
    }

    const redirectToGetApp = () => {
        router.push('/scanar/get-app');
    }

    return (
        <header>
            <nav className={`bg-white w-full md:static md:text-sm ${state ? "fixed z-10 h-full" : ""}`}>
                <div className="custom-screen items-center mx-auto md:flex">
                    <div className="flex items-center justify-between px-2 py-3 md:py-5 md:block">
                        <Link href="/">
                            <img
                                src="/ScanAR_Logo.png"
                                width={200}
                                height={200}
                                className="mx-3"
                                alt="ScanAR logo"
                            />
                        </Link>
                        <div className="md:hidden">
                            <button role="button" aria-label="Open the menu" className="text-white hover:text-gray-400"
                                onClick={handleNavMenu}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block ${state ? "" : "hidden"}`}>
                        <ul className="text-white justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 md:font-medium">
                            <li>
                                <button
                                    onClick={redirectToGetApp}
                                    className="block font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 md:inline px-4 py-2 rounded-md"
                                >
                                    Get the App
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar 