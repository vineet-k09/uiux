import { Button } from "@/components/ui/button"
import BlockReveal from "@/components/motion/BlockReveal"

export default function ContactUs() {
    return (
        <>
        <section className="contact w-full h-svh p-6 flex flex-col gap-12 text-white justify-center items-center">
            <BlockReveal>
            <div className="text-6xl font-bold bg-gradient-to-r from-[#ff5874] to-[#e767f9] bg-clip-text text-transparent">LETS SHAPE WHATS NEXT - TOGETHER</div>
            </BlockReveal>
            <div className="text-2xl text-center ">Whether you are exploring AI opportunities, modernizing data platforms, or scaling proven solutions, the AI & Data Service Tower is here to help. </div>
            <div className="items-center">
                <Button>Reach Out</Button>
            </div>
        </section>
        </>
    )
}