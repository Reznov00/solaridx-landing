import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";
import featureIcon from "../../../public/icons/featureIcon.svg";

const ToolKit = () => {
    const features = [
        {
            icon: featureIcon,
            title: "Real-Time Energy Predictions",
            desc: "Get energy production forecasts up to 15 days in advance."
        },
        {
            icon: featureIcon,
            title: "Customized System Size Solution",
            desc: "Tailor your solar system size based on your energy needs."
        },
        {
            icon: featureIcon,
            title: "AI-Powered Chatbot",
            desc: "Have solar-related queries? Our chatbot is here to assist you."
        },
        {
            icon: featureIcon,
            title: "Third-Party Integrations",
            desc: "Connect with platforms like Snapchat Spectacles for enhanced functionality."
        },
    ];

    const comingSoon = [
        {
            icon: featureIcon,
            title: "Brightspace D2L Integration",
            desc: "Seamlessly integrate with Brightspace D2L for solar education."
        },
        {
            icon: featureIcon,
            title: "Quantinuum Quantum Computing",
            desc: "Quantum computing-powered energy predictions are coming soon on Quantinuum ⚡🔮."
        }
    ];

    return (
        <SectionWrapper>
            <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        SolarIDX - The Ultimate Solar Energy Application
                    </h2>
                    <p>
                        Explore the features that make SolarIDX your go-to solar companion.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((item, idx) => (
                            <li key={idx} className="flex gap-x-4">
                                <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
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
                <div className="mt-12">
                    <h2 className="text-2xl text-gray-800 font-semibold sm:text-center mb-8">
                        Coming Soon 🚀
                    </h2>
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3 mt-6">
                        {comingSoon.map((item, idx) => (
                            <li key={idx} className="flex gap-x-4">
                                <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
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

export default ToolKit;