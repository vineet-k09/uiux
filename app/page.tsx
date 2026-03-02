import Navbar from "@/components/layout/Navbar"
import HeroSection from "@/components/sections/HeroSection"
import LandingPage from "./landing/page"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-zinc-950 via-black to-purple-800 text-white">
      <Navbar />
      <LandingPage/>
      <Footer/>
      {/* <HeroSection /> */}
    </div>
  )
}