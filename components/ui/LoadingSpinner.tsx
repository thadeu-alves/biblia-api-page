import Image from "next/image";

export function LoadingSpinner() {
    return (
        <div className="h-100 w-full flex justify-center items-center">
            <Image
                src="/spinner.svg"
                width={30}
                height={30}
                alt="spinner icone"
                className="animate-spin w-12"
            />
        </div>
    );
}
