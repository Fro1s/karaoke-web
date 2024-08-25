import Link from "next/link"
import {
    Bell,
    CircleUser,
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Dashboard() {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
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
                                href="/dashboard/create-show"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                Criar Show
                            </Link>
                            <Link
                                href="/dashboard/register-song"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                Cadastrar
                            </Link>
                            <Link
                                href="/dashboard/search-song"
                                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                            >
                                Procurar
                            </Link>
                            <Link
                                href="/dashboard/queue"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                Fila Atual
                            </Link>
                            <Link
                                href="/dashboard/tv"
                                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            >
                                TV
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="shrink-0 md:hidden"
                            >
                                <Menu className="size-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="flex flex-col">
                            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                                <Link
                                    href="/dashboard/create-show"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    Criar Show
                                </Link>
                                <Link
                                    href="/dashboard/register-song"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    Cadastrar
                                </Link>
                                <Link
                                    href="/dashboard/search-song"
                                    className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                                >
                                    Procurar
                                </Link>
                                <Link
                                    href="/dashboard/queue"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    Fila Atual
                                </Link>
                                <Link
                                    href="/dashboard/tv"
                                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                                >
                                    TV
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className="w-full flex-1">

                    </div>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    <div className="flex items-center">
                        Colocar algo aqui?
                    </div>
                </main>
            </div>
        </div>
    )
}
