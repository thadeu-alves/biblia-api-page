import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <div className="p-8 border-t border-t-[var(--secondary)] space-y-8 lg:px-60">
            <div className="flex justify-between items-center ">
                <p className="font-normal text-sm max-w-1/2">
                    <span className="font-bold text-[var(--secondary)]">
                        Bíblia API
                    </span>{" "}
                    é uma RESTful API que fornece acesso a
                    dados de livros, capítulos e versículos
                    da bíblia.
                </p>
                <div className="h-10 w-10">
                    <Link href="https://github.com/thadeu-alves/biblia-api">
                        <Image
                            src="/github.svg"
                            alt="github icon"
                            width={50}
                            height={50}
                        />
                    </Link>
                </div>
            </div>
            <div>
                <h1 className="text-center font-normal text-sm">
                    This website was developed by{" "}
                    <Link
                        href="https://thadeualves.vercel.app"
                        className="text-[var(--secondary)] italic"
                    >
                        Thadeu Alves
                    </Link>
                </h1>
            </div>
        </div>
    );
}
