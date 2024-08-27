import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CircleUser } from "lucide-react"
import { useRouter } from "next/router"

export function SideBar() {
    const router = useRouter()
    const isActive = (path: any) => router.pathname === path

    return (
        <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="flex">
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="size-8" />
                            </Button>
                            <span className="ml-2 mt-2.5 text-sm font-medium text-muted-foreground">Name</span>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Meu Perfil</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href="/config">Configurações</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/contact">Contato</Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href="/">Sair</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="flex-1">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                    <Link
                        href="/dashboard"
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isActive('/dashboard') ? 'bg-zinc-300 text-muted-foreground' : 'text-muted-foreground'}`}
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="/dashboard/create-show"
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isActive('/dashboard/create-show') ? 'bg-zinc-300 text-muted-foreground' : 'text-muted-foreground'}`}
                    >
                        Criar Show
                    </Link>
                    <Link
                        href="/dashboard/register-song"
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isActive('/dashboard/register-song') ? 'bg-zinc-300 text-muted-foreground' : 'text-muted-foreground'}`}
                    >
                        Cadastrar
                    </Link>
                    <Link
                        href="/dashboard/search-song"
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isActive('/dashboard/search-song') ? 'bg-zinc-300 text-muted-foreground' : 'text-muted-foreground'}`}
                    >
                        Procurar
                    </Link>
                    <Link
                        href="/dashboard/queue"
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isActive('/dashboard/queue') ? 'bg-zinc-300 text-muted-foreground' : 'text-muted-foreground'}`}
                    >
                        Fila Atual
                    </Link>
                    <Link
                        href="/dashboard/tv"
                        className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${isActive('/dashboard/tv') ? 'bg-zinc-300 text-muted-foreground' : 'text-muted-foreground'}`}
                    >
                        TV
                    </Link>
                </nav>
            </div>
        </div>
    )
}
