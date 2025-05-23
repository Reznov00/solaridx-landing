import SectionWrapper from "../../../components/SectionWrapper"
import NavLink from "../../../components/NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Experience Augmented Reality Warehouse Management
                </h2>
                <p className="mt-3 text-gray-600">
                    Get real-time product scanning, AR-powered inventory tracking, and seamless Snapchat Spectacles integration with ScanAR technology.
                </p>
                <NavLink
                    href="/scanar/get-app"
                    className="mt-4 inline-block font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 px-6 py-3 rounded-lg"
                >
                    Get Notified
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA 