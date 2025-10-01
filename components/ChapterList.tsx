import Link from "next/link";

export function ChapterList({
    lenght,
    bookId,
}: {
    lenght: number;
    bookId: string;
}) {
    return (
        <ul
            className={`mt-2 grid grid-cols-3 gap-4 md:grid-cols-6 xl:grid-cols-10`}
        >
            {Array.from({
                length: lenght,
            }).map((_, i) => {
                return (
                    <li
                        key={i + 1}
                        className="w-20 h-20 bg-[var(--primary)] rounded-2xl border-2 border-[var(--primary)] hover:bg-transparent transition"
                    >
                        <Link
                            href={`/livros/${bookId}?cap=${
                                i + 1
                            }`}
                            className="w-full h-full  text-2xl font-semibold flex justify-center items-center "
                        >
                            {i + 1}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}
