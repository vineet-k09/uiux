import globals from "../../data/globals.json"

export default function VIVA(){
    return (
        <div>
            <h1 className="text-4xl font-extrabold bg-linear-to-r 
           from-[#ff1a1a] via-[#ff2e63] to-[#8e2de2] 
           bg-clip-text text-transparent">
                {globals.title}
            </h1>
        </div>
    )
}