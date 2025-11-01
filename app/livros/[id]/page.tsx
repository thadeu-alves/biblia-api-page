import { ChapterList } from "@/components/ChapterList";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { http } from "@/utils/http";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

interface PageProps {
    params: Promise<{ id: string }>;
    searchParams: Promise<{
        cap?: string;
    }>;
}

export default async function page({
    params,
    searchParams,
}: PageProps) {
    const { id } = await params;
    const { cap } = await searchParams;

    const { data: book } = await http.getBook(Number(id));
    const { data } = await http.getBookChapter(
        Number(id),
        Number(cap),
    );

    return (
        <div className="space-y-8 lg:space-y-12">
            <Link href="/">
                <Image
                    src="/back.svg"
                    alt="back icon"
                    width={30}
                    height={30}
                />
            </Link>

            <Suspense fallback={<LoadingSpinner />}>
                <div className="text-center">
                    <h1 className="text-[var(--secondary)] font-semibold text-2xl">
                        {book.nome}
                    </h1>
                    <h2 className="font-serif text-8xl">
                        {data
                            ? cap
                            : book.capitulos + " cap."}
                    </h2>
                </div>

                {data && (
                    <ul className="space-y-4 lg:space-y-8">
                        {data.map((e, i) => {
                            return (
                                <li
                                    key={i}
                                    className="font-serif italic flex gap-4 text-xl lg:gap-8"
                                >
                                    <span>{i + 1}</span>
                                    {e}
                                </li>
                            );
                        })}
                    </ul>
                )}

                {!data && book && (
                    <ChapterList
                        lenght={book.capitulos}
                        bookId={id}
                    />
                )}
            </Suspense>
        </div>
    );
}
