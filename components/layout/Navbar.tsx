import Link from "next/link"
import VIVA from "../ui/VIVA"
import { Button } from "../ui/button"
import globals from "../../data/globals.json"

export default function Navbar() {
    return (
        <nav className="flex flex-row justify-between pt-2 px-4 ">
             {/* left */}
            <div className="w-[33%] ">
                <Link href={'/'} className="grid items-baseline">
                <div className="col-1">
                    <VIVA /> 
                </div>
                    <p className="col-2">
                        {globals.subtitle}
                    </p>
                    <div className="col-span-12"></div>
                </Link>
            </div>

            {/* center */}
            <div className="items-center flex flex-row justify-center gap-3 w-[33%]">
            <Link href={'/about'}>/about</Link>
            <Link href={'/services_2'}>/services</Link>
            </div>

            {/* right */}
            <div className="items-center justify-end flex w-[33%]">
                <Button>Reach Out</Button>
            </div>
        </nav>
    )
}