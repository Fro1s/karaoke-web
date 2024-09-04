import { Menu, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SideBar } from "@/components/ui/side-bar";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Queue() {
    const [queue, setQueue] = useState([
        { id: "1", title: "A Morte do Autotune", artist: "Matuê" },
        { id: "2", title: "777-666", artist: "Matuê" },
        { id: "3", title: "Leans pt.2", artist: "Yunk Vino" },
    ]);

    const handleRemove = (id: any) => {
        setQueue(queue.filter(song => song.id !== id));
    };

    const handleDragEnd = (result: any) => {
        if (!result.destination) return;
        const reorderedQueue = Array.from(queue);
        const [movedItem] = reorderedQueue.splice(result.source.index, 1);
        reorderedQueue.splice(result.destination.index, 0, movedItem);
        setQueue(reorderedQueue);
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
                    <div className="w-full flex-1">
                    </div>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    <DragDropContext onDragEnd={handleDragEnd}>
                        <Droppable droppableId="queue">
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef} className="flex flex-col gap-2">
                                    {queue.map((song, index) => (
                                        <Draggable key={song.id} draggableId={song.id} index={index}>
                                            {(provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className="flex items-center justify-between p-2 border-b"
                                                >
                                                    <div>
                                                        <div className="font-bold">{song.title}</div>
                                                        <div className="text-sm text-muted-foreground">{song.artist}</div>
                                                    </div>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        onClick={() => handleRemove(song.id)}
                                                    >
                                                        <Minus className="size-5" />
                                                    </Button>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </main>
            </div>
        </div>
    );
}