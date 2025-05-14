import { useEffect, useRef, useState } from "react";

const VideoSection = () => {
    const videoRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <section className="bg-gray-50">
            <div className="custom-screen py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">See SolariDX in Action</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Watch our comprehensive walkthrough showcasing how SolariDX transforms your solar energy experience with real-time monitoring and intelligent analytics.
                        </p>
                    </div>
                    <div
                        className="aspect-video rounded-xl overflow-hidden shadow-xl"
                        ref={videoRef}
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/d_kbdwtS7BI${isInView ? '?autoplay=1&loop=1&playlist=d_kbdwtS7BI' : '?loop=1&playlist=d_kbdwtS7BI'}`}
                            title="SolariDX Walkthrough"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection; 