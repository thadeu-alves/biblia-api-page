"use client";
import { Book } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Livro } from "./Livro";
import { normalizarTexto } from "@/utils/text";

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
                    normalizarTexto(book.nome).includes(
                        normalizarTexto(filter)
                    )
                )
            );
        } else {
            setFiltered(data);
        }
    }, [filter, data]);

    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-8 justify-between items-center md:flex-row">
                <h1 className="font-semibold text-2xl font-serif">
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
            <div className="space-y-2 lg:flex lg:gap-8">
                {filtered.length > 0 ? (
                    <>
                        <div className="w-full space-y-2 max-w-100">
                            {filtered
                                .slice(0, 33)
                                .map(({ nome, id }) => {
                                    return (
                                        <Livro
                                            nome={nome}
                                            id={id}
                                            key={id}
                                        />
                                    );
                                })}
                        </div>
                        <div
                            className={`w-full space-y-2 lg:pl-8 lg:border-l border-l-[var(--secondary)] ${
                                filtered.slice(33, 100)
                                    .length > 0
                                    ? ""
                                    : "hidden"
                            } max-w-100`}
                        >
                            {filtered
                                .slice(33, 100)
                                .map(({ nome, id }) => {
                                    return (
                                        <Livro
                                            nome={nome}
                                            id={id}
                                            key={id}
                                        />
                                    );
                                })}
                        </div>
                    </>
                ) : (
                    <h1>Livro não encontrado</h1>
                )}
            </div>
        </div>
    );
}
