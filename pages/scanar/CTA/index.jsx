import SectionWrapper from "../../../components/SectionWrapper";
import NavLink from "../../../components/NavLink";
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
                            alt="Unlock the Power of AR Solar Analysis with ScanAR"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl relative">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Unlock the Power of AR Solar Analysis with ScanAR
                        </h2>
                        <p className="mt-3 text-gray-600">
                            ScanAR brings augmented reality to solar energy analysis, combining advanced computer vision,
                            machine learning, and AR technology to provide real-time solar installation assessment.
                            Whether you're a solar installer, homeowner, or energy consultant, our cutting-edge technology
                            helps you visualize and optimize solar panel placement with unprecedented accuracy.
                        </p>
                        <p className="mt-3 text-gray-600">
                            Get immersive visualization, precise energy production estimates, and installation guidance—
                            all through your mobile device. Ready to revolutionize your solar analysis experience?
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default CTA; 