import Link from "next/link";

export function Livro({
    nome,
    id,
}: {
    nome: string;
    id: number;
}) {
    return (
        <Link
            href={`/livros/${id}`}
            className="border-2 border-[var(--primary)] p-4 rounded block text-xl font-normal select-none cursor-pointer hover:bg-[var(--primary)] transition"
        >
            {nome}
        </Link>
    );
}
