import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";
import featureIcon from "../../../public/icons/featureIcon.svg";

const Features = () => {
    const features = [
        {
            icon: featureIcon,
            title: "AR Visualization",
            desc: "See solar potential in real-time through your device's camera with advanced augmented reality."
        },
        {
            icon: featureIcon,
            title: "Shading Analysis",
            desc: "Instantly identify shading issues that could impact your solar panel performance."
        },
        {
            icon: featureIcon,
            title: "Optimal Placement",
            desc: "Get AI-powered recommendations for the best panel placement on any surface."
        },
        {
            icon: featureIcon,
            title: "Energy Production Estimates",
            desc: "Calculate expected energy production based on your specific installation and location."
        },
        {
            icon: featureIcon,
            title: "ROI Calculator",
            desc: "Understand your investment return timeline with our comprehensive financial analysis tools."
        },
        {
            icon: featureIcon,
            title: "Installation Guide",
            desc: "Follow step-by-step AR-guided installation instructions for perfect panel placement."
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
                        Discover how ScanAR will revolutionize your solar experience.
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