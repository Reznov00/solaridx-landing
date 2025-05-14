import NavLink from "../NavLink";

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-8 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    The Future of Solar Energy at Your Fingertips
                </h1>
                <p className="max-w-xl mx-auto">
                    SolariDX provides state of the art AR education powered by machine learning, offering physics-informed, machine learning driven recommendations along with seamless LMS integration.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 text-gray-800 font-semibold ">
                    <div>
                        <span className="text-3xl font-bold">15+</span>
                        <p className="text-sm">Days of Predictions</p>
                    </div>
                    <div>
                        <span className="text-3xl font-bold">Energy Insights</span>
                        <p className="text-sm">Powered by  Machine Learning.</p>
                    </div>
                    <div>
                        <span className="text-3xl font-bold">Seamless</span>
                        <p className="text-sm">LMS Integrations</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm mt-8">
                    <NavLink
                        href="#cta"
                        className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 px-5 py-2 rounded-lg"
                    >
                        Learn more
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
);

export default Hero; 