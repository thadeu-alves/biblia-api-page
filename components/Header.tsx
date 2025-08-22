import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <div className="p-8 flex justify-between items-center border-b border-b-[var(--secondary)] lg:px-60">
            <Link href="/">
                <h1 className="font-serif font-semibold text-xl lg:text-2xl">
                    Bíblia API
                </h1>
            </Link>
            <div className="h-10 w-10">
                <Link href="/">
                    <Image
                        src="/github.svg"
                        alt="github icon"
                        width={50}
                        height={50}
                    />
                </Link>
            </div>
        </div>
    );
}
