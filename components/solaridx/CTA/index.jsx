import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import ctaImage from "../../../public/cta-image.webp";
import Image from "next/image";

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen relative">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="relative flex-1 sm:hidden lg:block">
                        <Image
                            src={ctaImage}
                            className="rounded-lg md:max-w-lg"
                            alt="Unlock the Future of Solar Energy with SolariDX"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl relative">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Unlock the Future of Solar Energy with SolariDX
                        </h2>
                        <p className="mt-3 text-gray-600">
                            SolariDX combines advanced AI, Physics-Informed Neural Networks, and Quantum Computing
                            to bring you the most accurate solar energy predictions. Whether you're a homeowner,
                            business, or researcher, our cutting-edge technology helps you optimize your solar
                            investments with real-time insights and simulations.
                        </p>
                        <p className="mt-3 text-gray-600">
                            Get precise energy forecasts, AI-driven recommendations, and seamless integrations—
                            all in one platform. Ready to experience the next era of solar technology?
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default CTA; 