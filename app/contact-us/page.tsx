import FancyButton from "@/components/ui/button2";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-brand flex items-center">
      <div className="grid md:grid-cols-2 w-full px-10 md:px-20 gap-12">
        {/* LEFT SIDE */}
        <div className="flex items-center">
          <h1 className="text-7xl md:text-8xl font-extrabold leading-tight">
            Contact <br className="hidden md:block" /> <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Us
          </span>
          </h1>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex items-center">
          <form className="w-full max-w-xl flex flex-col gap-6">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:border-white/30"
            />

            <input
              type="text"
              placeholder="Subject"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:border-white/30"
            />

            <textarea
              rows={5}
              placeholder="Message"
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:border-white/30 resize-none"
            />
            <FancyButton title="Send message" />
          </form>
        </div>
      </div>
    </div>
  );
}
