import { Livros } from "@/components/Livros";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { Book } from "@/types";
import { http } from "@/utils/http";
import { Suspense } from "react";

export default async function Home() {
    const { data } = (await http.getHome()) as {
        data: Book[];
    };

    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Livros data={data} />
        </Suspense>
    );
}
