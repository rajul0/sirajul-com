import Hero from "./components/header-intro/Hero";
import WhoAmI from "./components/who-am-i/WhoAmI";
import MyProject from "./components/my-project/MyProject";
import "locomotive-scroll/dist/locomotive-scroll.css";
import MyTools from "./components/my-tools/MyTools";

export default function Home() {
  return (
    <div className="w-full px-2 md:px-16 lg:px-32 ">
      <div className="h-20 md:hidden"></div>
      <Hero />
      <WhoAmI />
      <div className="w-full my-10 border border-gray-300 dark:border-gray-800 " />
      <MyProject />
      <div className="w-full my-10 border border-gray-300 dark:border-gray-800 " />
      <MyTools />
      <div className="h-[100vh]"></div>
    </div>
  );
}
