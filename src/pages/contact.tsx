import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <div>
             <div>
                <Link href="/">
                    <ChevronLeftIcon className="w-6 h-6" />
                </Link>
            </div>
            
            <h1>Contato</h1>
        </div>
    )
}