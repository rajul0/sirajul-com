"use client";

import Hero from "./components/header-intro/Hero";
import WhoAmI from "./components/who-am-i/WhoAmI";
import MyTools from "./components/my-tools/MyTools";
import { Divider } from "@/components/atoms";
import MyProject from "./components/my-project/MyProject";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";

export default function Home() {
  return (
    <>
      <DefaultSeo {...SEO} />
      <section className="w-full px-6 md:px-16 lg:px-32">
        <div className="h-20 md:hidden"></div>
        <Hero />
        <WhoAmI />
        <Divider className="my-4 md:my-5 lg:my-10" />
        <MyProject />
        <Divider className="my-4 md:my-5 lg:my-10" />
        <MyTools />
        <div className="h-[10vh]"></div>
      </section>
    </>
  );
}
