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
                            alt="Unlock the Power of AR Warehouse Management with ScanAR"
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl relative">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Unlock the Power of AR Warehouse Management with ScanAR
                        </h2>
                        <p className="mt-3 text-gray-600">
                            ScanAR brings augmented reality to warehouse management, combining advanced computer vision,
                            machine learning, and AR technology to provide real-time inventory tracking and management.
                            Whether you're a warehouse manager, logistics coordinator, or inventory specialist, our cutting-edge technology
                            helps you scan, track, and optimize product placement with unprecedented accuracy.
                        </p>
                        <p className="mt-3 text-gray-600">
                            Get seamless integration with Snapchat Spectacles, precise inventory tracking, and real-time notifications—
                            all through your mobile device and AR glasses. Ready to revolutionize your warehouse management experience?
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default CTA; 