import Image from "next/image"

interface Props {
  logos: string[]
}

export default function WhoWeServe({ logos }: Props) {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-4xl font-semibold text-black">Who We Serve</h2>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-10 items-center">
        {logos.map((logo) => (
          <div
            key={logo}
            className="relative h-12 grayscale hover:grayscale-0 hover:scale-110 transition duration-300"
          >
            <Image src={logo} alt="company logo" fill className="object-contain" />
          </div>
        ))}
      </div>
    </div>
  )
}