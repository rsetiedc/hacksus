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
  Package,
  RefreshCw,
  ShoppingBag,
  Palmtree,
  Atom,
  Shirt,
  Building2,
  Droplet,
  Car,
  Recycle,
  Cpu,
  Maximize,
} from "lucide-react";
// import { Globe } from "@/components/magicui/globe";
import { Timeline } from "@/components/ui/timeline";
import { Feature } from "@/components/ui/feature-with-image-carousel";
import { Badge } from "@/components/ui/badge";
import { Dock } from "@/components/ui/dock-two";
import { HyperText } from "@/components/magicui/hyper-text";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { SlidingNumber } from "@/components/ui/sliding-number";

// Constants
const REGISTRATION_URL = "https://konfhub.com/hacksus-edition-4";
const EVENT_DATE = "14th - 16th March 2025";
const EVENT_LOCATION = "Rajagiri School of Engineering and Technology, Kochi";

// Navigation items
const navigationItems = [
  { icon: Home, label: "Home", sectionId: "home" },
  { icon: Book, label: "About", sectionId: "about" },
  // { icon: Home, label: "HackS'US" },
  { icon: Play, label: "Timeline", sectionId: "timeline" },
  { icon: Phone, label: "Contact", sectionId: "contact" },
];

// Timeline data
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
            taking participants from zero to hero by building an AI-powered chat
            app.
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
    title: "12 Mar",
      content: (
        <div>
          <h3 className="text-2xl text-left">Hackathon Registration Closes</h3>
        </div>
      ),
    },
    {
    title: "14 Mar | 6:30 PM",
    content: <div className="text-4xl font-bold">Registration Starts</div>,
  },
  {
    title: "14 Mar | 7:30 PM",
    content: <div className="text-4xl font-bold">Hackathon Launch</div>,
  },
  {
    title: "14 Mar | 7:30 PM",
    content: <div className="text-4xl font-bold">1. Ideation Phase</div>,
  },
  {
    title: "14 Mar | 11:30 PM",
    content: <div className="text-4xl font-bold">2. Technical Phase</div>,
  },
  {
    title: "15 Mar | 1:30 PM",
    content: <div className="text-4xl font-bold">3. Business Phase</div>,
  },
  {
    title: "16 Mar | 12:00 AM",
    content: <div className="text-4xl font-bold">4. Shark Tank Phase</div>,
  },
  {
    title: "16 Mar | 11:30 AM",
    content: <div className="text-4xl font-bold">Closing Ceremony</div>,
  },
];

// Essential items to bring
const essentialItems = [
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

// Features data
  const features = [
    {
      Icon: Code,
    name: "What is HackS'US 4.0?",
      description:
      "HackS'US 4.0 is a premier 36-hour hackathon hosted by RSET IEDC & IIC, where participants build innovative tech solutions to tackle real-world challenges.",
      href: "#",
      background: (
        <img
          className="absolute -top-20 opacity-60"
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="HackS'US 4.0"
        />
      ),
      className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Users,
      name: "Who can participate?",
      description:
        "Students from any college or university can join, with teams required to have 4-6 members.",
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
    Icon: Cpu,
    name: "What hardware is required for the hardware track?",
      description:
      "Teams participating in the hardware track must bring their own hardware components and equipment. This includes microcontrollers, sensors, actuators, and any other necessary components for their project.",
      href: "#",
      background: (
      <img
        className="absolute -right-20 -top-20 opacity-60"
        src="/src/img/hardware.jpg"
        alt="Hardware Requirements"
        />
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-5",
    },
    {
      Icon: Lock,
    name: "Can I participate if I don't have a team?",
      description:
        "Team formation is not facilitated. Participants must register as a complete team of 4-6 members.",
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
      href: "#",
      background: (
        <Marquee
          pauseOnHover
          className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
        >
        {essentialItems.map((f, idx) => (
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

// Helper function for smooth scrolling
const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

// Add a function to toggle full screen
const toggleFullScreen = () => {
  const countdownSection = document.getElementById("countdown-section");
  if (countdownSection) {
    if (!document.fullscreenElement) {
      countdownSection.requestFullscreen().catch((err) => {
        console.error(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  }
};

// Main component
const LandingPage: React.FC = () => {
  // Timer state
  const [timeLeft, setTimeLeft] = React.useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // Timer update logic
  React.useEffect(() => {
    const updateTimer = () => {
      const targetDate = new Date("March 16, 2025 09:00:00");

      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const totalHours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: String(totalHours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    const timerId = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call to set the timer immediately

    return () => clearInterval(timerId);
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-fixed overflow-x-hidden"
      style={{
        backgroundImage: "url('src/img/background1.jpg')",
      }}
    >
      <Dock
        items={navigationItems.map((item) => ({
          ...item,
          onClick: () => scrollToSection(item.sectionId),
        }))}
        className="fixed bottom-0 z-100"
      />

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
        <header className="flex items-center justify-center">
          <img src="/src/img/logo_outline.png" alt="logo" className="w-24" />
          <HyperText className="mt-16 text-5xl md:text-7xl font-bold text-white font-chakra">
            ackS'US
          </HyperText>
        </header>

        <InteractiveHoverButton
          className="my-5 font-redhat"
          onClick={() => window.open(REGISTRATION_URL, "_blank")}
        >
          Register Now
        </InteractiveHoverButton>

        <div className="flex flex-col md:flex-row">
          <div className="flex justify-start items-center gap-4 px-10">
            <CalendarIcon size="20px" className="w-min-30" />
            <TypingAnimation className="font-redhat text-xl font-bold my-2 max-w-60">
              {EVENT_DATE}
            </TypingAnimation>
          </div>

          <div className="flex justify-start items-center gap-4 px-10">
            <MapPin size="20px" />
            <TypingAnimation className="font-redhat text-lg font-bold my-2 max-w-60 text-left">
              {EVENT_LOCATION}
            </TypingAnimation>
          </div>
        </div>
        <SlidingNumber value={100000} />
      </section>

      <VelocityScroll
        className="font-redhat text-white my-10"
        defaultVelocity={0.5}
      >
        HACKS'US - EDITION IV <span className="text-green-400">IS LIVE</span> |
      </VelocityScroll>

      <section
        id="countdown-section"
        className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-4 md:px-8"
      >
        {/* <style>{`
          @keyframes glitch {
            0% {
              transform: translate(0);
              opacity: 1;
            }
            20% {
              transform: translate(-2px, 2px);
              opacity: 0.8;
            }
            40% {
              transform: translate(-2px, -2px);
              opacity: 0.6;
            }
            60% {
              transform: translate(2px, 2px);
              opacity: 0.8;
            }
            80% {
              transform: translate(2px, -2px);
              opacity: 1;
            }
            100% {
              transform: translate(0);
              opacity: 1;
            }
          }

          .glitch {
            animation: glitch 1s infinite;
            position: relative;
            color: #fff;
            text-shadow: 0 0 5px rgba(255, 0, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.5);
          }
        `}</style> */}

        <h2 className="font-redhat text-3xl font-bold mb-2 uppercase tracking-wider glitch">
          Hackathon Countdown
        </h2>
        <div className="flex gap-15 font-redhat items-center">
          <div className="flex flex-col items-center">
            <span
              className="text-9xl font-chakra font-bold text-transparent -webkit-text-stroke-2 text-white text-shadow-[0_0_10px_rgba(128,0,128,0.7),0_0_20px_rgba(128,0,128,0.5)]"
              id="hours"
            >
              {timeLeft.hours}
            </span>
            <span className="text-lg">Hours</span>
          </div>
          <p className="text-9xl font-chakra font-bold text-shadow-[0_0_10px_rgba(128,0,128,0.7),0_0_20px_rgba(128,0,128,0.5)]">
            :
          </p>
          <div className="flex flex-col items-center">
            <span
              className="text-9xl font-chakra font-bold text-transparent -webkit-text-stroke-2 text-white text-shadow-[0_0_10px_rgba(128,0,128,0.7),0_0_20px_rgba(128,0,128,0.5)]"
              id="minutes"
            >
              {timeLeft.minutes}
            </span>
            <span className="text-lg">Minutes</span>
          </div>
          <p className="text-9xl font-chakra font-bold text-shadow-[0_0_10px_rgba(128,0,128,0.7),0_0_20px_rgba(128,0,128,0.5)]">
            :
          </p>
        <div className="flex flex-col items-center">
            <span
              className="text-9xl font-chakra font-bold text-transparent -webkit-text-stroke-2 text-white text-shadow-[0_0_10px_rgba(128,0,128,0.7),0_0_20px_rgba(128,0,128,0.5)]"
              id="seconds"
            >
              {timeLeft.seconds}
            </span>
            <span className="text-lg">Seconds</span>
          </div>
          <button
            onClick={toggleFullScreen}
            className="ml-4 p-2  text-white rounded-lg  transition"
          >
            <Maximize size="24" />
          </button>
        </div>
      </section>

      <Feature />

      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="font-redhat text-3xl font-bold">Hydration Partner</h2>
        <img
          src="/src/img/hydration.png"
          alt="Hydration Partner"
          className="w-100"
        />
      </div>

      {/* Theme Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col jsutify-center items-center bg-neutral-950/50 backdrop-blur-sm md:rounded-xl p-8 text-left">
            <div className="flex md:flex-row flex-col items-center justify-center md:gap-10">
              <img src="/src/img/sdg.png" alt="SDG 12" className="w-50" />
              <div>
                <p className="font-redhat text-lg leading-relaxed text-3xl md:text-4xl uppercase border-b-2 border-white">
                  Theme | <strong>SDG 12</strong>
                </p>
          <HyperText
                  className="font-redhat text-4xl md:text-5xl font-bold mb-7"
            animateOnHover={false}
          >
                  Responsible Consumption and Production
          </HyperText>
              </div>
            </div>

            <p className="font-redhat text-lg mb-8 leading-relaxed">
              The 12th United Nations Sustainable Development Goal aims to
              ensure sustainable consumption and production patterns,
              emphasizing resource efficiency, sustainable infrastructure, and
              better quality of life for all.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-redhat">
              {/* Theme sub-sections */}
              <div className="space-y-4">
                <ThemeItem
                  icon={Clipboard}
                  title="Food Loss and Waste Reduction"
                  description="Developing systems to minimize food waste from production to consumption"
                  color="green-400"
                />
                <ThemeItem
                  icon={Package}
                  title="Sustainable Packaging"
                  description="Creating alternatives to traditional packaging materials"
                  color="blue-400"
                />
                <ThemeItem
                  icon={RefreshCw}
                  title="Circular Economy Models"
                  description="Promoting reuse and recycling of products and materials"
                  color="yellow-400"
                />
                <ThemeItem
                  icon={ShoppingBag}
                  title="Sustainable Procurement"
                  description="Tools for sustainable procurement practices"
                  color="purple-400"
                />
              </div>

              <div className="space-y-4">
                <ThemeItem
                  icon={Palmtree}
                  title="Sustainable Tourism"
                  description="Solutions for environmentally conscious tourism"
                  color="green-500"
                />
                <ThemeItem
                  icon={Atom}
                  title="Chemical Management"
                  description="Systems for safe chemical lifecycle management"
                  color="red-400"
                />
                <ThemeItem
                  icon={Shirt}
                  title="Sustainable Fashion"
                  description="Reducing environmental impact of fashion industry"
                  color="pink-400"
                />
                <ThemeItem
                  icon={Building2}
                  title="Sustainable Construction"
                  description="Innovative building materials and methods"
                  color="amber-400"
                />
              </div>

              <div className="space-y-4">
                <ThemeItem
                  icon={Droplet}
                  title="Water Management"
                  description="Efficient use and conservation of water resources"
                  color="blue-500"
                />
                <ThemeItem
                  icon={Car}
                  title="Sustainable Transportation"
                  description="Low-emission and efficient transportation solutions"
                  color="cyan-400"
                />
                <ThemeItem
                  icon={Recycle}
                  title="Waste Reduction"
                  description="Systems to minimize waste and enhance recycling"
                  color="emerald-400"
                />
                <ThemeItem
                  icon={Users}
                  title="Consumer Awareness"
                  description="Educating and promoting sustainable choices"
                  color="indigo-400"
                />
              </div>
            </div>
            <img
              src="/src/img/SDG_12.png"
              alt="SDG 12"
              className="w-100 mt-10"
            />
          </div>
        </div>

        {/* Stats Section */}
        <section className="flex flex-col md:flex-row justify-center gap-10 md:gap-50 w-screen py-10 px-10">
          <StatItem value="100+" label="Teams" />
          <StatItem value="2" label="Tracks" />
          <StatItem value="500+" label="Participants" />
        </section>

        {/* Tracks Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-redhat my-5 p-5">
          <TrackCard
            trackNumber="1"
            title="Software Solutions"
            description="Develop innovative software solutions focusing on sustainable consumption and production patterns."
            icon={Code}
            color="blue-400"
            items={[
              "Smart Resource Management Systems",
              "Sustainable Supply Chain Analytics",
              "Eco-friendly Consumer Apps",
            ]}
          />
          <TrackCard
            trackNumber="2"
            title="Hardware Innovations"
            description="Create sustainable hardware solutions that promote efficient resource utilization and environmental conservation."
            icon={Cpu}
            color="green-400"
            items={[
              "Energy-Efficient Devices",
              "Smart Waste Management Systems",
              "Sustainable Manufacturing Tools",
            ]}
          />
        </div>
      </section>
      <div className=" w-screen flex justify-center items-center bg-linear-to-t from-neutral-950/80 via-neutral-950/50 py-5 px-2">
        <HeroVideoDialog
          className="block w-300 "
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/e_oKYPvK1vo"
          thumbnailSrc="/src/img/thumbnail.png"
          thumbnailAlt="Hero Video"
        />
      </div>

      {/* <section className="flex flex-col md:flex-row justify-center gap-10 md:gap-50  bg-linear-to-t from-neutral-950/80 via-neutral-950/50 w-screen py-30 px-20"></section> */}

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

      <FooterSection />
    </div>
  );
};

// Sub-components
const ThemeItem: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}> = ({ icon: Icon, title, description, color }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1">
      <Icon className={`w-5 h-5 text-${color}`} />
    </div>
    <div>
      <h4 className="font-bold mb-1">{title}</h4>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  </div>
);

const TrackCard: React.FC<{
  trackNumber: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  items: string[];
}> = ({ trackNumber, title, description, icon: Icon, color, items }) => (
  <div className="bg-neutral-950/50 backdrop-blur-sm rounded-xl p-8 text-left md:w-100 hover:bg-neutral-950/70 transition-colors">
    <div className="flex items-center gap-3 mb-4">
      <Icon className={`w-8 h-8 text-${color}`} />
      <h1 className="text-3xl font-chakra font-bold text-white">
        Track {trackNumber}
      </h1>
    </div>
    <h2 className={`text-2xl font-redhat font-bold text-${color} mb-4`}>
      {title}
    </h2>
    <p className="text-gray-300 mb-4">{description}</p>
    <ul className="space-y-2 text-gray-300">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <div className={`w-1.5 h-1.5 rounded-full bg-${color}`}></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const StatItem: React.FC<{ value: string; label: string }> = ({
  value,
  label,
}) => (
  <div className="flex flex-col items-center">
    <HyperText
      className="font-redhat text-6xl md:text-7xl text-center"
      animateOnHover={false}
    >
      {value}
    </HyperText>
    <p className="font-redhat text-2xl">{label}</p>
  </div>
);

export default LandingPage;
