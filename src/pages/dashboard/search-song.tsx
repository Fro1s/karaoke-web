import { useState } from "react";
import {
    Menu,
    Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SideBar } from "@/components/ui/side-bar";

export default function SearchSong() {
    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState<{ id: number; title: string; artist: string }[]>([]);

    const mockResults = [
        { id: 1, title: "A Morte do Autotune", artist: "Matuê" },
        { id: 2, title: "777-666", artist: "Matuê" },
        { id: 3, title: "Leans pt.2", artist: "Yunk Vino" },
    ];

    const handleSearch = () => {
        const filteredResults = mockResults.filter(song =>
            song.title.toLowerCase().includes(searchQuery.toLowerCase()) || song.artist.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setResults(filteredResults);
    };

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden border-r bg-muted/40 md:block">
                <SideBar />
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
                            <SideBar />
                        </SheetContent>
                    </Sheet>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="Search for a song..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded border px-3 py-2"
                        />
                        <Button onClick={handleSearch} className="self-start">
                            Search
                        </Button>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        {results.length > 0 ? (
                            results.map((song) => (
                                <div key={song.id} className="flex items-center justify-between p-2 border-b">
                                    <div>
                                        <div className="font-bold">{song.title}</div>
                                        <div className="text-sm text-muted-foreground">{song.artist}</div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                    >
                                        <Plus className="size-5" />
                                    </Button>
                                </div>
                            ))
                        ) : (
                            <div className="p-2">Nenhum resultado encontrado</div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}