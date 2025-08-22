"use client";
import { Book } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Livro } from "./Livro";

interface LivroProps {
    data: Book[];
}

export function Livros({ data }: LivroProps) {
    const [filtered, setFiltered] = useState(data);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        if (filter) {
            setFiltered(
                data.filter((book) =>
                    book.nome.toLowerCase().includes(filter)
                )
            );
        } else {
            setFiltered(data);
        }
    }, [filter, data]);

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="font-semibold text-2xl">
                    Livros
                </h1>
                <div className="flex items-center">
                    <div className="h-10 flex justify-center items-center pl-4 rounded-l-2xl bg-[var(--primary)]">
                        <Image
                            src="/search.svg"
                            alt="search icon"
                            width={30}
                            height={30}
                            className="h-4 w-4"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Procurar"
                        className="bg-[var(--primary)] rounded-r-2xl
                    py-2 px-4 focus:outline-0"
                        value={filter}
                        onChange={(e) =>
                            setFilter(e.target.value)
                        }
                    />
                </div>
            </div>
            <div className="space-y-2">
                {filtered.length > 0 ? (
                    filtered.map(
                        ({ nome, capitulos, id }) => {
                            return (
                                <Livro
                                    nome={nome}
                                    capitulos={capitulos}
                                    key={id}
                                />
                            );
                        }
                    )
                ) : (
                    <h1>Livro não encontrado</h1>
                )}
            </div>
        </div>
    );
}
