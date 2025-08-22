import { Livros } from "@/components/Livros";
import { Book } from "@/types";
import { http } from "@/utils/http";

export default async function Home() {
    const { data } = (await http.getHome()) as {
        data: Book[];
    };

    return <Livros data={data} />;
}
