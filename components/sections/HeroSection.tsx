'use client'

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { ArrowDown, Briefcase } from "lucide-react"

export default function HeroSection() {
    const [isChanging, setIsChanging] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsChanging(prev => !prev)
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center gap-10 p-10"
            >
                {/* Floating Card */}
                <motion.div
                    animate={{
                        y: isChanging ? -10 : 10,
                        rotate: isChanging ? 2 : -2,
                        scale: isChanging ? 1.05 : 1
                    }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <Card className="w-80 backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl rounded-3xl">
                        <CardContent className="p-8 flex flex-col items-center gap-6">
                            <motion.div
                                animate={{ rotate: isChanging ? 180 : 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-blue-400"
                            >
                                <Briefcase size={40} />
                            </motion.div>

                            <p className="text-lg text-zinc-300 text-center">
                                Framer Motion × shadcn × Lucide
                            </p>

                            <Button
                                onClick={() => setIsChanging(prev => !prev)}
                                className="rounded-xl"
                            >
                                Toggle Magic ✨
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Animated Arrow */}
                <motion.div
                    animate={{ y: isChanging ? 0 : 15 }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                >
                    <ArrowDown className="text-zinc-400" />
                </motion.div>

                {/* Dialog */}
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="secondary" className="rounded-xl">
                            Open Dialog
                        </Button>
                    </DialogTrigger>

                    <DialogContent className="bg-zinc-900 border-white/10 rounded-2xl text-white">
                        <DialogHeader>
                            <DialogTitle>Everything Works 🎉</DialogTitle>
                        </DialogHeader>
                        This is fully animated, styled, and integrated.
                    </DialogContent>
                </Dialog>

            </motion.div>
        </div>
    )
}