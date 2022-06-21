import Link from "next/link";
import { useRouter } from "next/router";



export default function Header() {
    const router = useRouter();
    return (
        <header className={`flex h-20  w-full items-center ${router.pathname === "/" ? "bg-transparent absolute" : " bg-white/50 backdrop-blur-3xl  relative"}`}>
            <div className="grid grid-cols-2 w-full">
                <Link href="/" >
                    <button className="flex items-center ml-4 text-white text-3xl font-mono">
                        Next Template
                    </button>
                </Link>
                <div className="flex gap-5 justify-end items-center mr-4">
                    <Link href="/" >
                        <button className="text-white text-xl font-mono">
                            Home
                        </button>
                    </Link>
                    <Link href="/about">
                        <button className="text-white text-xl font-mono">
                            About
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    )
}