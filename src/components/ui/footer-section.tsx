import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { useEffect, useState } from "react";

function FooterSection() {
  const [isDarkMode, _] = useState(true);
  // const [isChatOpen, setIsChatOpen] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <footer
      id="contact"
      className="relative border-t bg-background text-foreground transition-colors duration-300 m-0 w-screen"
    >
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 font-redhat">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-2 justify-center items-center">
            {/* <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Get in touch
            </h2> */}
            {/* <p className="mb-6 text-muted-foreground">
              Join our newsletter for the latest updates and exclusive offers.
            </p> */}
            <img className="w-40" src="/src/img/iic.png" />
            <img className="w-40" src="/src/img/iedckerala-white.png" />
            <img className="w-40" src="/src/img/iicrset-white.png" />
            <img className="w-40" src="/src/img/rsetiedc-white.png" />
            {/* </div> */}

            {/* <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form> */}
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p className="font-bold">Elviin Thomas Eldho</p>
              <p className="flex gap-2">
                <Phone size={20} /> +91 885 113 2782
              </p>
              <p className="flex gap-2">
                <Mail size={20} /> elviin.t.eldho@gmail.com
              </p>
              <hr />
              <p className="font-bold">Abraham Manoj</p>
              <p className="flex gap-2">
                <Phone size={20} /> +91 701 207 9459
              </p>
              <p className="flex gap-2">
                <Mail size={20} /> abrahammadamana@gmail.com
              </p>
              <hr />
            </address>
            {/* <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-primary">
                Home
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                About Us
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Services
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Products
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Contact
              </a>
            </nav> */}
          </div>
          <div>
            {/* <h3 className="mb-4 text-lg font-semibold">Contact Us</h3> */}{" "}
            <img className="w-60 mb-5" src="/src/img/rset-white.png" />
            <address className="space-y-2 text-sm not-italic">
              <p>X9V5+96P, Rajagiri Valley Rd</p>
              <p>Rajagiri Valley, Kakkanad, Kerala 682039</p>
              {/* <p>Phone: (123) 456-7890</p> */}
              {/* <p><Globe /> www.rsetiedc.in</p> */}
              <p className="flex gap-2">
                <Globe size={20} /> www.rajagiritech.ac.in
              </p>
              {/* <p>Email: rsetiedc@rajagiritech.edu.in</p> */}
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="flex gap-2 my-5">
              <Globe size={20} /> www.rsetiedc.in
            </p>
            {/* <p>Email: rsetiedc@rajagiritech.edu.in</p> */}

            <p className="flex gap-2 my-5">
              <Mail size={20} /> rsetiedc@rajagiritech.edu.in
            </p>
            {/* <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div> */}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 RSET IEDC & IIC RSET. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { FooterSection };
