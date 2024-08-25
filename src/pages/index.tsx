import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"
import Logo from "@/assets/logo.jpg"
import Lua from "@/assets/lua.jpg"

export default function LandingPage() {
    return (
        <div className="w-full">
            <nav className="w-full bg-zinc-500 text-white z-10">
                <div className="container mx-auto flex justify-between items-center px-8 py-6">
                    <div className="flex items-center space-x-16">
                        <Image
                            src={Logo}
                            alt="Logo"
                            className="h-10 rounded-md w-auto"
                        />
                        <Link href="/home" className="hover:underline">Home</Link>
                        <Link href="/about" className="hover:underline">Sobre</Link>
                        <Link href="/faq" className="hover:underline">FAQ</Link>
                        <Link href="/contact" className="hover:underline">Contato</Link>
                    </div>
                    <Button asChild>
                        <Link href="/auth/login" className="text-white font-bold py-2 px-6 rounded">
                            Login
                        </Link>
                    </Button>
                </div>
            </nav>
            <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
                <div className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[350px] gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Bem vindo</h1>
                            <p className="text-balance text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste pariatur saepe tempora. Cupiditate sed voluptatibus impedit laboriosam dolor, qui alias voluptatem assumenda dolorem reprehenderit velit at voluptas recusandae fugiat ex.
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <Button type="submit" className="w-full" asChild>
                                <Link href="/create-account/register">
                                    Registrar
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="hidden py-2 px-2 bg-muted lg:block">
                    <Image
                        src={Logo}
                        alt="LOGO"
                        width={1920}
                        height={1080}
                        className="h-full w-full rounded-md object-cover dark:brightness-[0.2] dark:grayscale"
                    />
                </div>
            </div>
        </div>
    );
}