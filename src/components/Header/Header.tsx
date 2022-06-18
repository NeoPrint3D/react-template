import { useRouter } from "next/router";



export default function Header() {
    const router = useRouter();
    return (
        <header className={`flex w-full ${router.pathname === "/" ? "absolute" : "relative"} text-black`}>
            <div className="mx-auto p-4">
                <h1 className="text-3xl">Here is</h1>
            </div>
        </header>
    )
}