import NavLink from "../../../components/NavLink";

const Hero = () => (
    <section className="bg-white text-black">
        <div className="custom-screen py-28">
            <div className="space-y-8 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold mx-auto sm:text-6xl">
                    The Future of <span className="text-blue-400">Solar Analysis</span> with Augmented Reality
                </h1>
                <p className="max-w-xl mx-auto text-gray-900">
                    ScanAR brings solar energy analysis into the future with cutting-edge augmented reality technology. Visualize, analyze, and optimize your solar installations like never before.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 font-semibold">
                    <div>
                        <span className="text-3xl font-bold text-gray-900">Real-time</span>
                        <p className="text-sm text-gray-900">AR Visualization</p>
                    </div>
                    <div>
                        <span className="text-3xl font-bold text-gray-900">Precise</span>
                        <p className="text-sm text-gray-900">Installation Analysis</p>
                    </div>
                    <div>
                        <span className="text-3xl font-bold text-gray-900">Optimized</span>
                        <p className="text-sm text-gray-900">Energy Production</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm mt-8">
                    <NavLink
                        href="#notify"
                        className="inline-block mt-4 font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 px-6 py-3 rounded-lg"
                    >
                        Get Notified
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
);

export default Hero; 