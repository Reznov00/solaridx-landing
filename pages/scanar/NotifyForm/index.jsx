import { useState } from "react";
import SectionWrapper from "../../../components/SectionWrapper";

const NotifyForm = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission to your backend
        // For now, we'll just simulate a successful submission
        setIsSubmitted(true);
    };

    return (
        <SectionWrapper>
            <div id="notify" className="custom-screen">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Be the First to Know
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Sign up to be notified when ScanAR launches and get exclusive early access.
                    </p>
                    {isSubmitted ? (
                        <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                            <p className="text-green-700 font-medium">
                                Thank you for your interest! We'll notify you when ScanAR launches.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-3 rounded-lg outline-none border focus:border-blue-600 w-full sm:max-w-md"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                className="px-4 py-3 rounded-lg outline-none bg-blue-600 text-white font-medium hover:bg-blue-500 active:bg-blue-700 duration-150"
                                type="submit"
                            >
                                Notify Me
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default NotifyForm; 