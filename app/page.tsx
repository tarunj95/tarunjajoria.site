"use client";
import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Script from 'next/script'
import { FaReact, FaNode, FaGithub, FaDocker, FaAws } from "react-icons/fa"; // Example for React Icons

// import {} from "lucide-react";
import { SparklesText } from "@/components/ui/sparkles-text";
import myImage from "../public/mypic.png";
import ghibliPic from "../public/giblipic.png";
import { Button } from "@/components/ui/button";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(myImage);
  const [loading, setLoading] = useState(false);

  const handleImageClick = () => {
    setLoading(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev === myImage ? ghibliPic : myImage));
      setLoading(false);
    }, 800); // simulating loading time
  };

  return (<>
    <BackgroundBeamsWithCollision>
      <main className="min-h-screen bg-gray-50 p-6 text-gray-900">
        <section className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <div className="lg:flex justify-center">
              <h1 className="text-4xl font-bold mb-2">Tarun &nbsp;</h1>
              <span className="lg:hidden sm:block">
                <hr className="my-4 border-t border-gray-300" />
              </span>
              <SparklesText
                className="text-4xl ml-2"
                text="Frontend Engineer"
              />
            </div>
          </div>

          <section className="grid grid-cols-1  md:grid-cols-2 gap-6 z-50">
            <Card id="about" className="z-50 md:col-span-2">
              <CardContent>
                <div
                  className="relative w-full h-auto aspect-[4/3] cursor-pointer"
                  onClick={handleImageClick}>
                  <Image
                    className="rounded-xl object-cover"
                    src={currentImage}
                    fill
                    alt="Picture of the author"
                  />
                  {loading && (
                    <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center rounded-xl z-10 transition-opacity duration-300">
                      {/* <div className="h-8 w-8 border-2 border-t-transparent border-gray-800 rounded-full animate-spin" /> */}
                    </div>
                  )}
                </div>

                <div className="mt-4 flex justify-center space-x-4">
                  <a href="mailto:tarunjajoria95@gmail.com" target="_blank">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="https://github.com/tarunj95" target="_blank">
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tarun-jajoria/"
                    target="_blank">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="tel:+447407045644">
                    <Phone className="w-5 h-5" />
                  </a>
                  <div className="flex w-5 h-5 items-center space-x-2">
                    <a
                      href="https://vcard.link/card/IZ4F.vcf"
                      // type="text/vcard"
                      className="mt-0 text-[23px]">
                      
                    </a>
                  </div>
                  {/* TODO: android save card  */}
                  {/* <div className="flex items-center space-x-2">
                  <svg enable-background="new 0 0 128 128" id="Social_Icons" version="1.1" viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x31__stroke"><g id="Android_1_"><rect fill="none" height="128" width="128"/><path clip-rule="evenodd" d="M112.368,40.466c-4.222,0-7.64,3.326-7.64,7.428    v31.797c0,4.102,3.418,7.428,7.64,7.428c4.214,0,7.632-3.326,7.632-7.428V47.894C120,43.793,116.582,40.466,112.368,40.466z     M15.64,40.466c-4.222,0-7.64,3.326-7.64,7.428v31.797c0,4.102,3.418,7.428,7.64,7.428c4.214,0,7.632-3.326,7.632-7.428V47.894    C23.272,43.793,19.854,40.466,15.64,40.466z M28.917,40.466h-0.549v54.503c0,4.327,3.611,7.85,8.065,7.85h5.815    c-0.201,0.655-0.309,1.34-0.309,2.062v15.692c0,4.102,3.426,7.428,7.64,7.428c4.214,0,7.64-3.326,7.64-7.428V104.88    c0-0.722-0.116-1.407-0.309-2.062h14.182c-0.193,0.655-0.302,1.34-0.302,2.062v15.692c0,4.102,3.418,7.428,7.632,7.428    c4.222,0,7.648-3.326,7.648-7.428V104.88c0-0.722-0.116-1.407-0.317-2.062h5.823c4.454,0,8.057-3.522,8.057-7.85V40.466H28.917z     M81.53,10.716l1.423-2.092l1.423-2.062l3.17-4.636c0.394-0.572,0.232-1.34-0.356-1.716c-0.58-0.384-1.376-0.226-1.755,0.346    l-4.841,7.052L79.141,9.73C74.54,7.992,69.413,7.021,64,7.021c-5.405,0-10.54,0.971-15.141,2.709l-1.446-2.122l-1.431-2.085    l-3.402-4.967c-0.394-0.572-1.183-0.722-1.771-0.346c-0.58,0.376-0.742,1.144-0.356,1.716l3.17,4.636l1.423,2.062l1.431,2.092    c-10.803,4.899-18.11,14.179-18.11,24.798h71.264C99.632,24.895,92.325,15.616,81.53,10.716z M48.728,25.602    c-2.111,0-3.82-1.663-3.82-3.718c0-2.055,1.709-3.71,3.82-3.71s3.82,1.656,3.82,3.71C52.548,23.939,50.839,25.602,48.728,25.602z     M79.272,25.602c-2.111,0-3.82-1.663-3.82-3.718c0-2.055,1.709-3.71,3.82-3.71c2.111,0,3.82,1.656,3.82,3.71    C83.092,23.939,81.383,25.602,79.272,25.602z" fill="#95CF00" fill-rule="evenodd" id="Android"/></g></g></svg>
                  </div> */}
                </div>

                <p className="mt-2 text-justify">
                  Hi, I&apos;m Tarun — a frontend engineer who believes good UI
                  should feel like magic, but be built with logic. I craft
                  intuitive, performant, and scalable interfaces using React,
                  TypeScript, and a deep respect for clean design systems.
                  Whether it&apos;s building seamless dashboards, pixel-perfect
                  landing pages, or robust internal tools, I treat every
                  interaction like it&apos;s the most important click of a user&apos;s
                  day. I&apos;ve worked across startups and enterprise teams, where
                  I&apos;ve wrangled API chaos, squashed UI quirks that only appear
                  in IE (because of course they do), and collaborated across
                  disciplines to ship meaningful, fast, and accessible products.
                  If the experience is delightful, I&apos;ve done my job right. I
                  love solving real problems, obsessing over details, and
                  pushing pixels with purpose. Bonus points if there&apos;s a cool
                  animation or a clean fade-in along the way. Currently open to
                  opportunities that mix great product thinking with frontend
                  craft. Let&apos;s build something unforgettable — one well-placed
                  div at a time.
                  {/* I&apos;m a frontend engineer with experience across React,
                  Next.js, and UI/UX design systems. Passionate about clean
                  code, accessibility, and performance-driven products. */}
                </p>
              </CardContent>
            </Card>
            <Card id="#project" className="md:col-span-2 z-50">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">Projects</h2>
                <ul className="list-disc list-inside text-sm space-y-2">
                  <li>
                    <strong>BotBuster</strong> – Anti-bot analytics dashboard
                    built with React, TypeScript, and GraphQL.
                  </li>
                  <li>
                    <strong>M&S Internal Tool</strong> – Inventory and staff
                    shift tracker developed in Next.js with Firebase backend.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card id="#skills" className="z-50 md:col-span-2">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>React, Next.js, TypeScript, JavaScript (ES6+)</li>
                  <li>HTML5, CSS3, Tailwind CSS, SCSS, CSS Modules</li>
                  <li>Redux, Responsive Design, Accessibility (WCAG)</li>
                  <li>Node.js, Express, REST APIs, GraphQL</li>
                  <li>AWS, Docker, Vercel, GitHub Actions</li>
                  <li>Jest, Cypress, Unit/Integration/E2E Testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card id="#connect" className="md:col-span-2 z-50">
              <CardContent className="p-6 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">Let&apos;s Connect</h2>
                  <p className="text-sm text-gray-600">
                    Have an opportunity or idea? I&apos;d love to hear from you.
                  </p>
                </div>
                <Button asChild>
                  <a href="about">Say Hello</a>
                </Button>
              </CardContent>
            </Card>

            <Menubar className="fixed bottom-0 left-0 right-0 w-[75%] bg-white border-t border-gray-200 shadow-md z-50 md:hidden flex justify-center mx-auto my-[20px] shadow-md">
              <MenubarMenu>
                <MenubarTrigger>About</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Projects</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Skills</MenubarTrigger>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>
                  <a href="#about">
                    <Mail className="w-5 h-5" />
                  </a>
                </MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          </section>
        </section>
      </main>
      
    </BackgroundBeamsWithCollision>
    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-59GVFTR4ZG"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-59GVFTR4ZG');
        `}
      </Script>
    </>
  );
}
