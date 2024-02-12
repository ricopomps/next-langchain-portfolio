import randomRoleLogo from "@/assets/logoRandomRole.png";
import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Guy and his work.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>About Me</H1>
      <section className="space-y-3">
        <H2>Who am I?</H2>
        <p>
          My name is Guy and I am a software developer from Brazil. I started
          programming in 2016, at the age of 18, and since then I have created
          lots of small projects.
        </p>
        <p>
          I&apos;m passionate about building cool apps and websites and I love
          sharing the things I learn with my friends.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Skills</H2>
        <p>
          I&apos;m a full-stack web developer specializing in{" "}
          <strong>React</strong>, <strong>Next.js</strong>, and{" "}
          <strong>Node.js</strong>.
        </p>
        <p>
          I also have experience with Mobile development. I prefer web
          development because you can use a modern website on almost every
          device and reach the whole world with it.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Side projects</H2>
        <p>
          In my free time, I like to work on side projects to keep my skill
          sharp and try out new tech. Here is a list of my current projects:{" "}
        </p>
        <ul className="list-inside list-disc">
          <li>Portilio - An portfolio app using next</li>
          <li>
            Random Role - A small mobile app, that allows you to make a list of
            options and selects a random one, with react native
          </li>
          <li>Condominium - A condominium manager using next and nest</li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
          Besides programming, I love walking. I also enjoy reading books and
          watching anime. I think having hobbies other than coding is important
          for mental health.
        </p>
        <p>
          I&apos;m also very much into self-improvement, nutrition, and positive
          psychology.
        </p>
        <Image src={randomRoleLogo} alt="Random role" className="rounded-md" />
      </section>
    </section>
  );
}
