import Link from "next/link";

const Brand = () => (
    <Link href="/scanar">
        <img
            src="/scanar.svg"
            width={120}
            height={120}
            className="mx-3 bg-['red']"
            alt="ScanAR logo"
        />
    </Link>
)
export default Brand 