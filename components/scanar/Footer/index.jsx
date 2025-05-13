import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";

const Footer = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    The Future of AR Solar Analysis
                </h2>
                <p className="mt-3 text-gray-600">
                    ScanAR will revolutionize how you analyze and optimize solar installations using augmented reality technology. Be among the first to experience it.
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                    <NavLink
                        href="#notify"
                        className="inline-block font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 px-6 py-3 rounded-lg"
                    >
                        Get Notified
                    </NavLink>
                    <NavLink
                        href="/"
                        className="inline-block font-medium text-sm text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 px-6 py-3 rounded-lg"
                    >
                        Back to Main Site
                    </NavLink>
                </div>
            </div>
        </div>
    </SectionWrapper>
);

export default Footer; 