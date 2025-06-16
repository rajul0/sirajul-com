import Hero from "./components/header-intro/Hero";
import WhoAmI from "./components/who-am-i/WhoAmI";
import MyProject from "./components/my-project/MyProject";
import MyTools from "./components/my-tools/MyTools";
import { Divider } from "@/components/atoms";

export default function Home() {
  return (
    <div className="w-full px-6 md:px-16 lg:px-32">
      <div className="h-20 md:hidden"></div>
      <Hero />
      <WhoAmI />
      <Divider className="my-4 md:my-5 lg:my-10" />
      <MyProject />
      <Divider className="my-4 md:my-5 lg:my-10" />
      <MyTools />
      <div className="h-[10vh]"></div>
    </div>
  );
}
