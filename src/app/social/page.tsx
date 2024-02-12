import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media channels and how to work with me.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Social Media</H1>
      <section className="space-y-3">
        <H2>My channels</H2>
        <p>I... Have social media, sort of</p>
        <p>Links to all my social accounts:</p>

        <hr className="border-muted" />
      </section>

      <section className="space-y-3">
        <H2>Discord server</H2>
        <p>I... Use discord</p>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>Business inquiries</H2>
        <p>If you want to work with me on a project, call me... somewhere</p>
      </section>
    </section>
  );
}
