import React from "react";
import { Particles } from "@/components/magicui/particles";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { TypingAnimation } from "@/components/magicui/terminal";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { FooterSection } from "@/components/ui/footer-section";
import { Book, CalendarIcon, Home, MapPin, Phone, Play } from "lucide-react";
// import { Globe } from "@/components/magicui/globe";
import { Timeline } from "@/components/ui/timeline";
import { Feature } from "@/components/ui/feature-with-image-carousel";
import { Badge } from "@/components/ui/badge";
import { Dock } from "@/components/ui/dock-two";
import { HyperText } from "@/components/magicui/hyper-text";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const LandingPage: React.FC = () => {
  const timelineData = [
    {
      title: "26 Feb",
      content: (
        <div>
          <h3 className="text-2xl">Hackathon Regsitration Opens</h3>
        </div>
      ),
    },
    {
      title: "26 Feb",
      content: (
        <div className="flex gap-5 space-between items-center">
          <img
            className="w-100 rounded-2xl shadow-lg"
            src="/src/img/event3.jpg"
            alt=""
          />
          <div className="flex flex-col min-w-10 gap-1">
            <h3 className="text-2xl uppercase font-bold">React-ivate</h3>
            <Badge className="w-fit mb-3">React Workshop</Badge>{" "}
            <p className="">
              A <strong>One-Day</strong> Workshop on <strong>React</strong>,
              taking particpants from zero to hero by building an AI powered
              chat app.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "27 Feb",
      content: (
        <div className="flex gap-5 space-between items-center">
          <img
            className="w-100 rounded-2xl shadow-lg"
            src="/src/img/event2.jpg"
            alt=""
          />
          <div className="flex flex-col min-w-10 gap-1">
            <h3 className="text-2xl uppercase font-bold">RAG-volution</h3>
            <Badge className="w-fit mb-3">RAG Workshop</Badge>{" "}
            <p className="">
              A <strong>hands on</strong> session on{" "}
              <strong>Retiveal Augmented Generation (RAG)</strong> using{" "}
              <strong>Google Colab</strong> and <strong>Python</strong>
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2 Mar",
      content: (
        <div className="flex gap-5 space-between items-center">
          <img
            className="w-100 rounded-2xl shadow-lg"
            src="/src/img/event1.jpg"
            alt=""
          />
          <div className="flex flex-col min-w-10 gap-1">
            <h3 className="text-2xl uppercase font-bold">UI-Alchemist</h3>
            <Badge className="w-fit mb-3">UI / UX Workshop</Badge>{" "}
            <p className="">
              A <strong>12-hour</strong> design hackathon using{" "}
              <strong>Figma</strong>
            </p>
          </div>
        </div>
      ),
    },
    // {
    //   title: "2 - 8 Mar",
    //   content: (
    //     <div>
    //       <h3 className="text-2xl">Game Jam</h3>
    //       <Badge>Precursor</Badge>{" "}
    //     </div>
    //   ),
    // },
    {
      title: "7 Mar",
      content: (
        <div>
          <h3 className="text-2xl">Hackathon Registration Closes</h3>
        </div>
      ),
    },
    {
      title: "14 Mar",
      content: (
        <div>
          <h3 className="text-2xl">Hackathon Starts</h3>
        </div>
      ),
    },
    {
      title: "16 Mar",
      content: (
        <div>
          <h3 className="text-2xl">Hackathon Ends</h3>
        </div>
      ),
    },
  ];

  function scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }

  const items = [
    { icon: Home, label: "Home", onClick: () => scrollToSection("home") },
    { icon: Book, label: "About", onClick: () => scrollToSection("about") },
    // { icon: Home, label: "HackS'US" },
    {
      icon: Play,
      label: "Timeline",
      onClick: () => scrollToSection("timeline"),
    },
    {
      icon: Phone,
      label: "Contact",
      onClick: () => scrollToSection("contact"),
    },
  ];

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-fixed overflow-x-hidden"
      style={{
        backgroundImage: "url('src/img/background1.jpg')",
        backgroundPosition: `center ${scrollY * 0.5}px`, // Moves in reverse direction
      }}
    >
      <Dock items={items} className="fixed bottom-0 z-100" />

      {/* Background Particles */}
      <Particles
        className="fixed top-0 right-0 h-screen w-screen z-0"
        size={1}
        quantity={100}
        color="#fff"
      />

      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 flex flex-col items-center justify-center text-center min-h-[90vh]"
      >
        {/* Logo & Title */}
        <header className="flex items-center justify-center">
          <img src="/src/img/logo_outline.png" alt="logo" className="w-24" />
          <LineShadowText
            className="mt-16 text-4xl font-bold text-white font-chakra"
            shadowColor="#fff"
          >
            ackS'US
          </LineShadowText>
        </header>

        {/* Register Button */}
        <InteractiveHoverButton className="my-5 font-redhat">
          Register Now
        </InteractiveHoverButton>
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-start items-center gap-4 px-10">
            <CalendarIcon size="20px" className="w-min-30" />
            <TypingAnimation className="font-redhat text-xl font-bold my-2 max-w-60">
              14th - 16th March 2025
            </TypingAnimation>
          </div>

          <div className="flex justify-start items-center gap-4 px-10">
            <MapPin size="20px" />
            <TypingAnimation className="font-redhat text-lg font-bold my-2 max-w-60 text-left">
              Rajagiri School of Engineering and Technology, Kochi
            </TypingAnimation>
          </div>
        </div>
      </section>

      {/* Scrolling Text */}
      <VelocityScroll
        className="font-redhat text-white my-10"
        defaultVelocity={0.5}
      >
        HACKS'US - EDITION IV |
      </VelocityScroll>

      <Feature />

      <HeroVideoDialog
        className="block w-300"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/e_oKYPvK1vo"
        thumbnailSrc="/src/img/thumbnail.png"
        thumbnailAlt="Hero Video"
      />

      <section className="flex flex-col md:flex-row justify-center gap-10 md:gap-50  bg-linear-to-t from-neutral-950/80 via-neutral-950/50 w-screen py-30 px-20">
        <div className="flex flex-col items-center">
          <HyperText
            className="font-redhat text-3xl md:text-3xl text-center"
            animateOnHover={false}
          >
            100+
          </HyperText>
          <p className="font-redhat text-2xl">Teams</p>
        </div>
        {/* <div className="flex flex-col items-center">
          <HyperText
            className="font-redhat text-3xl md:text-3xl text-center"
            animateOnHover={false}
          >
            4 Lacs
          </HyperText>
          <p className="font-redhat text-2xl">Prize Pool</p>
        </div>
        <div className="flex flex-col items-center">
          <HyperText
            className="font-redhat text-3xl md:text-3xl text-center"
            animateOnHover={false}
          >
            4
          </HyperText>
          <p className="font-redhat text-2xl">Tracks</p>
        </div> */}
        <div className="flex flex-col items-center">
          <HyperText
            className="font-redhat text-3xl md:text-3xl text-center"
            animateOnHover={false}
          >
            500+
          </HyperText>
          <p className="font-redhat text-2xl">Participants</p>
        </div>
      </section>

      <Timeline data={timelineData} />

      <VelocityScroll
        className="font-redhat text-white py-10 bg-linear-to-b from-neutral-950/80 to-background"
        defaultVelocity={0.5}
      >
        REGISTER NOW |
      </VelocityScroll>

      {/* Terminal Output */}
      {/* <main className="my-20 w-screen flex justify-center items-center">
        <Terminal className="overflow-hidden text-left">
          <TypingAnimation>&gt; pnpm dlx shadcn@latest init</TypingAnimation>

          {[
            "✔ Preflight checks for Hacksus setup.",
            "✔ Verifying framework. Found Next.js, perfect for the Hacksus.",
            "✔ Validating Tailwind CSS for a sleek UI.",
            "✔ Validating import alias for better DX.",
            "✔ Writing components.json for reusable UI components.",
            "✔ Checking registry for latest dependencies.",
            "✔ Updating tailwind.config.ts with Hacksus4.0-specific styles.",
            "✔ Updating app/globals.css for consistent theming.",
            "✔ Installing dependencies required for the Hacksus4.0 project.",
          ].map((text, index) => (
            <AnimatedSpan
              key={index}
              delay={1500 + index * 500}
              className="text-green-500"
            >
              <span>{text}</span>
            </AnimatedSpan>
          ))}

          <AnimatedSpan delay={6000} className="text-blue-500">
            <span>ℹ Updated 1 file:</span>
            <span className="pl-2">- lib/utils.ts (optimized for Hacksus)</span>
          </AnimatedSpan>

          <TypingAnimation delay={6500} className="text-muted-foreground">
            🚀 Success! Hacksus project initialization completed.
          </TypingAnimation>

          <TypingAnimation delay={7000} className="text-muted-foreground">
            You may now add components and start building!
          </TypingAnimation>
        </Terminal>
      </main> */}

      {/* <Globe className="relative"  /> */}
      <FooterSection />
    </div>
  );
};

export default LandingPage;
