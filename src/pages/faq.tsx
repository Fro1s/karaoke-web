import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function FAQ() {
    return (
        <div>
            <div>
                <Link href="/">
                    <ChevronLeftIcon className="w-6 h-6" />
                </Link>
            </div>
            
            
            <h1>FAQ</h1>
        </div>
    )
}