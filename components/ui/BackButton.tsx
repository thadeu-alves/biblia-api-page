"use client";

import Image from "next/image";

export function BackButton() {
    return (
        <button onClick={() => window.history.back()}>
            <Image
                src="/back.svg"
                alt="back icon"
                width={30}
                height={30}
            />
        </button>
    );
}
