import Link from "next/link";

const Brand = () => (
    <Link href="/">
        <img
            src="/solaridx.svg"
            width={120}
            height={120}
            className="mx-3 bg-['red']"
            alt="SolariDX logo"
        />
    </Link>
)
export default Brand 