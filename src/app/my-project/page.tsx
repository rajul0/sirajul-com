import { Heading } from "@/components/molecules/Heading";
import { CardProjectV2 } from "./_component/CardProjectV2";
import Divider from "@/components/atoms/Divider";

export default function MyProject() {
  return (
    <main className="w-full  px-2 md:px-16 lg:px-32">
      <div className="h-20"></div>
      <Heading
        title="My Project"
        description="All the projects I have completed, both private and open-source. These projects are course assignments, competitions and personal projects."
      />
      <Divider />

      <div className="w-full mt-5 space-y-6">
        <CardProjectV2
          id={1}
          title="Sinergi App"
          description="All the projects I have completed, both private and open-source."
          image="/images/project.png"
          techStack={["Flutter", "Firebase"]}
        />
        <CardProjectV2
          id={1}
          title="Sinergi App"
          description="All the projects I have completed, both private and open-source. All the projects I have completed, both private and open-source.All the projects I have completed, both private and open-source."
          image="/images/project.png"
          techStack={["Flutter", "Firebase"]}
        />
      </div>
      <div className="h-[50vh]"></div>
    </main>
  );
}
