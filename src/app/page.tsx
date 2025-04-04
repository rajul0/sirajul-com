import Image from "next/image";
import Hero from "./components/header-intro/Hero";
import WhoAmI from "./components/who-am-i/WhoAmI";

export default function Home() {
  return (
    <div className="px-2 md:px-6">
      <div className="h-20"></div>
      <Hero />
      <WhoAmI />
    </div>
  );
}
