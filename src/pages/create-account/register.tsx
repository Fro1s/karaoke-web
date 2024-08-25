import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function Register() {
    return (

        <div>
            <div>
                <Link href="/">
                    <ChevronLeftIcon className="w-6 h-6" />
                </Link>
            </div>

            <h1>Register</h1>
        </div>
    )
}