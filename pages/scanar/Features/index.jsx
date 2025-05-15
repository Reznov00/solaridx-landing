import SectionWrapper from "../../../components/SectionWrapper";
import Image from "next/image";
import featureIcon from "../../../public/icons/featureIcon.svg";

const Features = () => {
    const features = [
        {
            icon: featureIcon,
            title: "AR-Based Scanning",
            desc: "Scan barcodes, QR codes, and visual markers through AR to fetch real-time product information."
        },
        {
            icon: featureIcon,
            title: "Inventory Tracking",
            desc: "Track products with detailed metadata including location, status, and ownership information."
        },
        {
            icon: featureIcon,
            title: "Spectacles Integration",
            desc: "Seamlessly integrate with Snapchat Spectacles for hands-free warehouse operations."
        },
        {
            icon: featureIcon,
            title: "Mobile Companion App",
            desc: "Control and manage inventory through our React Native mobile application."
        },
        {
            icon: featureIcon,
            title: "Real-time Notifications",
            desc: "Receive alerts about inventory changes, status updates, and system messages."
        },
        {
            icon: featureIcon,
            title: "Workflow Optimization",
            desc: "Improve warehouse efficiency with AR-guided directions and real-time product information."
        }
    ];

    return (
        <SectionWrapper>
            <div id="features" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        ScanAR Features
                    </h2>
                    <p>
                        Discover how ScanAR will revolutionize your warehouse management.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((item, idx) => (
                            <li key={idx} className="flex gap-x-4">
                                <div className="flex-none w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                                    <Image src={item.icon} alt={item.title} />
                                </div>
                                <div>
                                    <h4 className="text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p className="mt-3">
                                        {item.desc}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Features; 