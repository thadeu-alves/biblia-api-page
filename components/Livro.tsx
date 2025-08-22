"use client";
import { useState } from "react";

export function Livro({
    nome,
    capitulos,
}: {
    nome: string;
    capitulos: number;
}) {
    const [open, setOpen] = useState(false);

    const capitulosLista = [];
    for (let i = 1; i <= capitulos; i++) {
        capitulosLista.push(
            <li
                key={i}
                className="w-12 h-12 bg-[var(--primary)] rounded-2xl text-xl font-semibold flex justify-center items-center"
            >
                {i}
            </li>
        );
    }

    return (
        <div className="">
            <h1
                onClick={() => setOpen(!open)}
                className="text-xl font-normal select-none cursor-pointer"
            >
                {nome}
            </h1>
            <ul
                className={`${
                    open ? "" : "hidden"
                } mt-2 grid grid-cols-5 gap-2`}
            >
                {capitulosLista}
            </ul>
        </div>
    );
}
