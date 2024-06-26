import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";
import Chatbot from "@/components/main/chatbot";
import Certifications from "@/components/main/certifications";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Chatbot />
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
      </div>
    </main>
  );
}
