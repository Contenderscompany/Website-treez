import { db } from "@/db";
import { sql } from "drizzle-orm";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Engagements from "@/components/Engagements";
import MenuSignature from "@/components/MenuSignature";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import ComposeMenu from "@/components/ComposeMenu";
import Footer from "@/components/Footer";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  // Verify database connectivity
  await db.execute(sql`select 1`);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Engagements />
        <MenuSignature />
        <Team />
        <Testimonials />
        <ComposeMenu />
      </main>
      <Footer />
    </>
  );
}
