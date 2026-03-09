import { Button } from "@/components/ui/button"
import BlockReveal from "@/components/motion/BlockReveal"
import SplitFadeText from "@/components/motion/SplitText"

export default function ContactUs() {
    return (
        <section className="contact w-full min-h-screen p-6 flex flex-col gap-10 text-white justify-center items-center">

            <BlockReveal>
                <h2 className="text-5xl md:text-6xl font-bold text-center bg-linear-to-r from-[#ff5874] to-[#e767f9] bg-clip-text text-transparent">
                    LETS SHAPE WHATS NEXT - TOGETHER
                </h2>
            </BlockReveal>

            <div className="max-w-3xl text-xl text-center text-gray-300">
                <SplitFadeText
                    text="Whether you are exploring AI opportunities, modernizing data platforms, or scaling proven solutions, the AI & Data Service Tower is here to help."
                />
            </div>

            <div>
                <Button size="lg">
                    Reach Out
                </Button>
            </div>

        </section>
    )
}