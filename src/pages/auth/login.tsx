import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function LoginForm() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="w-full p-4">
                <div className="container mx-auto flex items-center">
                    <Link href="/" className="flex items-center">
                        <ChevronLeftIcon className="h-6 w-6 mr-2" />
                        <span className="text-lg font-bold">Voltar</span>
                    </Link>
                </div>
            </div>
            <div className="flex flex-grow items-center justify-center">
                <form method="POST">
                    <Card className="w-full max-w-sm mx-auto">
                        <CardHeader>
                            <CardTitle className="text-2xl">Login</CardTitle>
                            <CardDescription>
                                Digite seu e-mail abixo para entrar em sua conta!
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password">Senha</Label>
                                        <Link href="#" className="text-sm underline">
                                            Esqueceu sua senha?
                                        </Link>
                                    </div>
                                    <Input id="password" type="password" required />
                                </div>
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </form>
            </div>
        </div>
    );
}
