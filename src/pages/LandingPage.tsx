import React from "react";
import { Particles } from "@/components/magicui/particles";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TypingAnimation } from "@/components/magicui/terminal";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { FooterSection } from "@/components/ui/footer-section";
import {
  Award,
  Book,
  CalendarIcon,
  Clipboard,
  Clock,
  Code,
  Coffee,
  DollarSign,
  Home,
  Lock,
  Mail,
  MapPin,
  Phone,
  Play,
  Users,
} from "lucide-react";
// import { Globe } from "@/components/magicui/globe";
import { Timeline } from "@/components/ui/timeline";
import { Feature } from "@/components/ui/feature-with-image-carousel";
import { Badge } from "@/components/ui/badge";
import { Dock } from "@/components/ui/dock-two";
import { HyperText } from "@/components/magicui/hyper-text";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Calendar } from "@/components/ui/calendar";
import { Marquee } from "@/components/magicui/marquee";

const LandingPage: React.FC = () => {
  const timelineData = [
    {
      title: "26 Feb",
      content: (
        <div className="flex flex-col-reverse md:flex-row gap-5 items-start">
          <img
            className="w-full md:w-1/3 rounded-2xl shadow-lg"
            src="/src/img/event3.jpg"
            alt="React-ivate Workshop"
          />
          <div className="flex flex-col min-w-10 gap-1 text-left md:text-left">
            <h3 className="text-2xl uppercase font-bold">React-ivate</h3>
            <Badge className="w-fit mb-3">React Workshop</Badge>
            <p>
              A <strong>One-Day</strong> Workshop on <strong>React</strong>,
              taking participants from zero to hero by building an AI-powered
              chat app.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "27 Feb",
      content: (
        <div>
          <h3 className="text-2xl text-left md:text-left">
            Hackathon Registration Opens
          </h3>
        </div>
      ),
    },
    {
      title: "27 Feb",
      content: (
        <div className="flex flex-col-reverse md:flex-row gap-5 items-start">
          <img
            className="w-full md:w-1/3 rounded-2xl shadow-lg"
            src="/src/img/event2.jpg"
            alt="RAG-volution Workshop"
          />
          <div className="flex flex-col min-w-10 gap-1 text-left md:text-left">
            <h3 className="text-2xl uppercase font-bold">RAG-volution</h3>
            <Badge className="w-fit mb-3">RAG Workshop</Badge>
            <p>
              A <strong>hands-on</strong> session on
              <strong> Retrieval Augmented Generation (RAG)</strong> using
              <strong> Google Colab</strong> and <strong>Python</strong>.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2 Mar",
      content: (
        <div className="flex flex-col-reverse md:flex-row gap-5 items-start">
          <img
            className="w-full md:w-1/3 rounded-2xl shadow-lg"
            src="/src/img/event1.jpg"
            alt="UI-Alchemist Workshop"
          />
          <div className="flex flex-col min-w-10 gap-1 text-left md:text-left">
            <h3 className="text-2xl uppercase font-bold">UI-Alchemist</h3>
            <Badge className="w-fit mb-3">UI/UX Workshop</Badge>
            <p>
              A <strong>12-hour</strong> design hackathon using{" "}
              <strong>Figma</strong>.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "7 Mar",
      content: (
        <div>
          <h3 className="text-2xl text-left">Hackathon Registration Closes</h3>
        </div>
      ),
    },
    {
      title: "14-16 Mar",
      content: (
        <div>
          <h3 className="text-2xl text-left">HackS'US</h3>
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

  const files = [
    {
      name: "Laptop",
      body: "Bring your laptop to work on your project during the hackathon.",
    },
    {
      name: "Charger",
      body: "Don't forget your charger to keep your device powered throughout the event.",
    },
    {
      name: "Extension Cords",
      body: "Extension cords may be useful for additional power connectivity in a busy space.",
    },
    {
      name: "Personal Essentials",
      body: "Pack personal essentials including clothes, toiletries, medicines, etc. for a comfortable stay.",
    },
  ];

  const features = [
    {
      Icon: Code,
      name: "What is HackS’US 4.0?",
      description:
        "HackS’US 4.0 is a premier 36-hour hackathon hosted by RSET IEDC & IIC, where participants build innovative tech solutions to tackle real-world challenges.",
      // href: "/faq#what-is-hacksus",
      cta: "",
      href: "#",
      background: (
        <img
          className="absolute -top-20 opacity-60"
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="HackS’US 4.0"
        />
      ),
      className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Users,
      name: "Who can participate?",
      description:
        "Students from any college or university can join, with teams required to have 4-6 members.",
      // href: "/faq#who-can-participate",
      cta: "",
      href: "#",
      background: (
        <img
          className="absolute -right-20 -top-20 opacity-60"
          src="/src/img/participants.jpg"
          alt="Participants"
        />
      ),
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: MapPin,
      name: "Where is the event happening?",
      description:
        "The hackathon will take place at Rajagiri School of Engineering & Technology (RSET), Kakkanad, Kochi, near Infopark.",
      // href: "/faq#location",
      cta: "",
      href: "#",
      background: (
        <iframe
          className="absolute opacity-30 w-100 h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.4725237394496!2d76.35551597503105!3d9.993460390111602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ca6b98ae0f7%3A0xc81786bb40617774!2sRajagiri%20School%20of%20Engineering%20%26%20Technology!5e1!3m2!1sen!2sin!4v1740593557134!5m2!1sen!2sin"
          style={{ border: 0, pointerEvents: "none" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Rajagiri Map"
        ></iframe>
      ),
      className: "lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: DollarSign,
      name: "What is the registration fee?",
      description:
        "Registration fees vary by category: Early Bird ₹499, Regular ₹699, and FOMO ₹799.",
      // href: "/faq#registration-fee",
      cta: "",
      href: "#",
      background: (
        <img
          className="absolute -right-20 -top-20 opacity-60"
          src="/src/img/fee.jpg"
          alt="Registration Fee"
        />
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: Coffee,
      name: "Will food and accommodation be provided?",
      description:
        "Food will be provided throughout the event, with common napping and resting spaces available on campus (no dedicated accommodation).",
      // href: "/faq#food-accommodation",
      cta: "",
      href: "#",
      background: (
        <img
          className="absolute -right-20 -top-20 opacity-60"
          src="/src/img/food.jpg"
          alt="Food and Accommodation"
        />
      ),
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3",
    },
    {
      Icon: Clock,
      name: "When will the problem statements be released?",
      description:
        "Problem statements will be released 24 hours before the hackathon begins, giving teams time to strategize.",
      // href: "/faq#problem-statements",
      cta: "",
      href: "#",
      background: (
        <Calendar
          mode="single"
          selected={new Date(2024, 3, 13, 0, 0, 0)}
          className="absolute right-0 top-10 origin-top scale-75 rounded-md border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-90"
        />
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-5",
    },
    {
      Icon: Lock,
      name: "Can I participate if I don’t have a team?",
      description:
        "Team formation is not facilitated. Participants must register as a complete team of 4-6 members.",
      // href: "/faq#team-formation",
      cta: "",
      href: "#",
      background: (
        <img
          className="absolute -right-20 -top-20 opacity-60"
          src="/src/img/team-lock.jpg"
          alt="Team Formation"
        />
      ),
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: Award,
      name: "What are the prizes and benefits?",
      description:
        "Winners receive cash prizes, mentorship opportunities, industry networking, investor pitch chances, and potential internship offers.",
      // href: "/faq#prizes-benefits",
      cta: "",
      href: "#",
      background: (
        <img
          className="absolute -right-20 -top-20 opacity-60"
          src="/src/img/award.jpg"
          alt="Prizes and Benefits"
        />
      ),
      className: "lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: Clipboard,
      name: "What should I bring?",
      description:
        "Bring your laptop, charger, extension cords, and personal essentials (clothes, toiletries, medicines, etc.) for the two-day hackathon.",
      // href: "/faq#what-to-bring",
      cta: "",
      href: "#",
      background: (
        <Marquee
          pauseOnHover
          className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
        >
          {files.map((f, idx) => (
            <figure
              key={idx}
              className="relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium dark:text-white ">
                    {f.name}
                  </figcaption>
                </div>
              </div>
              <blockquote className="mt-2 text-xs">{f.body}</blockquote>
            </figure>
          ))}
        </Marquee>
      ),
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-4 lg:row-end-5",
    },
    {
      Icon: Mail,
      name: "Who can I contact for more details?",
      description:
        "For any queries, please refer to the contact details on our website.",
      // href: "/faq#contact",
      cta: "",
      href: "#",
      background: (
        <img
          className="absolute -right-20 -top-20 opacity-60"
          src="/src/img/contact.jpg"
          alt="Contact"
        />
      ),
      className: "lg:col-start-4 lg:col-end-5 lg:row-start-4 lg:row-end-5",
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
          <HyperText className="mt-16 text-7xl font-bold text-white font-chakra ">
            ackS'US
          </HyperText>
        </header>

        {/* Register Button */}
        <InteractiveHoverButton
          className="my-5 font-redhat"
          onClick={() =>
            window.open("https://konfhub.com/hacksus-edition-iv", "_blank")
          }
        >
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

      <section className="flex flex-col md:flex-row justify-center gap-10 md:gap-50   w-screen py-30 px-20">
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

      <section className="flex flex-col md:flex-row justify-center gap-10 md:gap-50  bg-linear-to-t from-neutral-950/80 via-neutral-950/50 w-screen py-30 px-20"></section>

      <Timeline data={timelineData} />

      <VelocityScroll
        className="font-redhat text-white py-10 bg-linear-to-b from-neutral-950/80 to-background"
        defaultVelocity={0.5}
      >
        REGISTER NOW |
      </VelocityScroll>

      <BentoGrid className="bg-background">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>

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
