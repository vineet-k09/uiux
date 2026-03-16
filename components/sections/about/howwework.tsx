"use client"

import { useState, useRef } from "react"
import { motion, useScroll } from "framer-motion"

const steps = [
{
id:"01",
title:"Discover",
desc:"We analyze the problem, data sources and workflows to identify where AI and automation can create the most value."
},
{
id:"02",
title:"Design",
desc:"Our engineers design scalable AI systems, data pipelines and automation architectures tailored to your needs."
},
{
id:"03",
title:"Build",
desc:"We build machine learning models, automation workflows and intelligent software solutions."
},
{
id:"04",
title:"Deploy",
desc:"Solutions are deployed into production with monitoring, scalability and continuous improvement."
}
]

export default function HowWeWork(){

const [active,setActive] = useState(0)

const ref = useRef(null)

const { scrollYProgress } = useScroll({
target: ref,
offset: ["start center","end center"]
})

return(

<section ref={ref} className="py-40">

<div className="max-w-5xl mx-auto px-6">

<h2 className="text-5xl md:text-6xl font-bold text-center mb-28">

How We

<span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent ml-3">
Work
</span>

</h2>

<div className="relative">

{/* base timeline */}

<div className="absolute left-5 top-0 bottom-0 w-px bg-white/10"/>

{/* animated progress line */}

<motion.div
style={{ scaleY: scrollYProgress }}
className="absolute left-5 top-0 w-px origin-top bg-gradient-to-b from-pink-500 to-purple-500"
/>

{steps.map((step,i)=>(

<motion.div
key={i}
onViewportEnter={()=> setActive(i)}
viewport={{ amount:0.5 }}
initial={{ opacity:0, y:40 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.5 }}
className="grid grid-cols-[60px_1fr] gap-8 mb-28 items-start"
>

{/* number */}

<motion.div
animate={{ scale: active===i ? 1.2 : 1 }}
className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border

${active===i
? "bg-gradient-to-r from-pink-500 to-purple-500 text-white border-transparent shadow-[0_0_20px_rgba(236,72,153,0.6)]"
: "bg-neutral-900 border-white/20 text-gray-400"}
`}
>

{step.id}

</motion.div>

{/* content */}

<div>

<h3
className={`text-3xl font-semibold mb-3 transition-all duration-300

${active===i
? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
: "text-white"}
`}
>
{step.title}
</h3>

<p
className={`leading-relaxed transition-all duration-300

${active===i
? "text-gray-300"
: "text-gray-500"}
`}
>
{step.desc}
</p>

</div>

</motion.div>

))}

</div>

</div>

</section>

)
}