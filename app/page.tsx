import { Livros } from "@/components/Livros";
import { Book } from "@/types";

export default async function Home() {
    const res = await fetch("https://bibliaapi.vercel.app");
    const { data } = (await res.json()) as {
        data: Book[];
    };

    return <Livros data={data} />;
}
