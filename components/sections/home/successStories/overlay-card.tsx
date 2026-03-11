"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { AlertTriangle, Wrench, TrendingUp } from "lucide-react"

const stories = [
{
title:"AI Demand Forecasting",
domain:"Retail AI",
image:"/SuccessCard.jpg",
challenge:"Retail chain struggled with inaccurate demand prediction causing stockouts.",
solution:"Built ML forecasting models using sales trends and seasonality.",
result:"Reduced stockouts by 32%."
},
{
title:"Fraud Detection",
domain:"FinTech",
image:"/success/fintech.jpg",
challenge:"Millions of transactions needed real-time fraud monitoring.",
solution:"Implemented anomaly detection with streaming pipelines.",
result:"Fraud detection speed improved 4x."
},
{
title:"Customer Support AI",
domain:"Conversational AI",
image:"/success/support.jpg",
challenge:"Support teams overwhelmed with repetitive tickets.",
solution:"Built AI chatbot integrated with knowledge base.",
result:"Automated 60% of queries."
},
{
title:"Predictive Maintenance",
domain:"Manufacturing AI",
image:"/success/manufacturing.jpg",
challenge:"Frequent machine failures disrupted operations.",
solution:"IoT sensors feeding predictive ML models.",
result:"Reduced downtime by 27%."
},
{
title:"Recommendation Engine",
domain:"Ecommerce AI",
image:"/success/ecommerce.jpg",
challenge:"Low product discovery on ecommerce platform.",
solution:"Implemented collaborative filtering recommender.",
result:"Average order value increased 22%."
}
]

export default function SuccessStories2() {

return (

<section className="w-full py-28 text-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold mb-12">
Success Stories
</h2>

<div className="flex gap-6 overflow-x-auto">

{stories.map((story,i)=> (

<motion.div
key={i}
className="relative w-[260px] h-[340px] rounded-xl overflow-hidden shrink-0 group cursor-pointer"
whileHover={{scale:1.08}}
transition={{duration:.25}}
>

<Image
src={story.image}
alt={story.title}
fill
className="object-cover"
/>

<div className="absolute inset-0 bg-black/40"/>

<div className="absolute bottom-4 left-4">

<span className="text-xs bg-white/20 px-2 py-1 rounded">
{story.domain}
</span>

<h3 className="text-lg font-semibold mt-2">
{story.title}
</h3>

</div>

<motion.div
className="absolute inset-0 bg-black/90 p-6 flex flex-col gap-4"
initial={{opacity:0}}
whileHover={{opacity:1}}
transition={{duration:.25}}
>

<div className="flex items-center gap-2">
<AlertTriangle size={18}/>
<h4 className="font-semibold">Challenge</h4>
</div>

<p className="text-sm opacity-80">
{story.challenge}
</p>

<div className="flex items-center gap-2">
<Wrench size={18}/>
<h4 className="font-semibold">Solution</h4>
</div>

<p className="text-sm opacity-80">
{story.solution}
</p>

<div className="flex items-center gap-2">
<TrendingUp size={18}/>
<h4 className="font-semibold">Result</h4>
</div>

<p className="text-sm opacity-80">
{story.result}
</p>

</motion.div>

</motion.div>

))}

</div>

</div>

</section>

)

}