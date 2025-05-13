import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";
import featureIcon from "../../../public/icons/featureIcon.svg";

const Features = () => {
    const features = [
        {
            icon: featureIcon,
            title: "Real-Time Energy Predictions",
            desc: "Get accurate energy production forecasts up to 15 days in advance using and physics-informed models."
        },
        {
            icon: featureIcon,
            title: "Customized System Size Solution",
            desc: "Tailor your ideal solar system size based on your unique energy usage patterns."
        },
        {
            icon: featureIcon,
            title: "AI-Powered Chatbot",
            desc: "Ask anything solar-related — our intelligent chatbot is always ready to assist."
        },
        {
            icon: featureIcon,
            title: "Social Media Integration",
            desc: "Connect seamlessly with platforms like the Snapchat app to share AR-powered solar experiences."
        },
        {
            icon: featureIcon,
            title: "D2L Brightspace",
            desc: "Deliver interactive solar education with built-in support for Brightspace D2L."
        },
        {
            icon: featureIcon,
            title: "Instructure Canvas",
            desc: "Integrate effortlessly with Canvas LMS to bring solar learning modules to educators and students."
        },
        {
            icon: featureIcon,
            title: "Quantum Computing",
            desc: "Experience the future of energy predictions with quantum computing, coming soon via Quantinuum."
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
            </div>
        </SectionWrapper>
    );
};

export default Features; 