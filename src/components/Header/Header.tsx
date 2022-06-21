import Link from "next/link";
import { useRouter } from "next/router";



export default function Header() {
    const router = useRouter();
    return (
        <header className={`flex h-20  w-full items-center ${router.pathname === "/" ? "bg-transparent absolute" : " bg-white/50 backdrop-blur-3xl  relative"}`}>
            <div className="grid grid-cols-2 w-full">
                <Link href="/" >
                    <h1 className="flex items-center ml-4 text-white text-3xl font-mono">
                        Vite Template
                    </h1>
                </Link>
                <div className="flex gap-5 justify-end items-center mr-4">
                    <Link href="/" >
                        <h1 className="text-white text-xl font-mono">
                            Home
                        </h1>
                    </Link>
                    <Link href="/about">
                        <h1 className="text-white text-xl font-mono">
                            About
                        </h1>
                    </Link>
                </div>
            </div>
        </header>
    )
}