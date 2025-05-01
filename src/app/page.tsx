import Hero from "./components/header-intro/Hero";
import WhoAmI from "./components/who-am-i/WhoAmI";
import MyProject from "./components/my-project/MyProject";
import "locomotive-scroll/dist/locomotive-scroll.css";
import MyTools from "./components/my-tools/MyTools";
import Divider from "@/components/atoms/Divider";

export default function Home() {
  return (
    <div className="w-full px-2 md:px-16 lg:px-32 ">
      <div className="h-20 md:hidden"></div>
      <Hero />
      <WhoAmI />
      <Divider />
      <MyProject />
      <Divider />
      <MyTools />
      <div className="h-[10vh]"></div>
    </div>
  );
}
