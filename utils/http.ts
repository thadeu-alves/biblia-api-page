import { Book } from "@/types";

export const http = {
    baseUrl: "https://bibliaapi.vercel.app/",
    async getHome() {
        const res = await fetch(this.baseUrl);
        const data = await res.json();
        return data;
    },
    async getBook(id: number): Promise<{ data: Book }> {
        const res = await fetch(
            this.baseUrl + `livro/${id}`
        );
        const data = await res.json();
        return data;
    },
    async getBookChapter(
        book: number,
        chap: number
    ): Promise<{ data: string[] }> {
        const res = await fetch(
            this.baseUrl + `livro/${book}/${chap}`
        );
        const data = await res.json();
        return data;
    },
};
