interface Props {
  cards: {
    title: string
    description: string
  }[]
}

export default function WhyUs({ cards }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-4xl font-semibold text-black">Why Us?</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="p-6 rounded-xl bg-neutral-100 hover:bg-neutral-200 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-neutral-700">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}