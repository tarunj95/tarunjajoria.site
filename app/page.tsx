import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { SparklesText } from "@/components/ui/sparkles-text";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
export default function HomePage() {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <main className="min-h-screen bg-gray-50 p-6 text-gray-900">
          <section className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="lg:flex justify-center">
                {" "}
                <h1 className="text-4xl font-bold mb-2">Tarun &nbsp;</h1>{" "}
                <span className="lg:hidden sm:block">
                  <hr className="my-4 border-t border-gray-300" />
                </span>{" "}
                <SparklesText
                  className=" text-4xl mb-2 ml-2"
                  text="Frontend Engineer"
                />
              </div>
              <p className="text-lg text-gray-600">
                Crafting beautiful, performant, and accessible web experiences
                with React, TypeScript & modern UI frameworks.
              </p>
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
              </div>
            </div>

            <section  className="grid grid-cols-1 md:grid-cols-2 gap-6 z-50">
              <Card id="about" className="z-50">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">About Me</h2>
                  <p>
                    I&apos;m a frontend engineer with experience across React,
                    Next.js, and UI/UX design systems. Passionate about clean
                    code, accessibility, and performance-driven products.
                  </p>
                </CardContent>
              </Card>

              <Card id="#skills" className="z-50">
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

              <Card id="#connect" className="md:col-span-2 z-50">
                <CardContent className="p-6 flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold">
                      Let&apos;s Connect
                    </h2>
                    <p className="text-sm text-gray-600">
                      Have an opportunity or idea? I&apos;d love to hear from
                      you.
                    </p>
                  </div>
                  <Button asChild>
                    <a href="about">Say Hello</a>
                  </Button>
                </CardContent>
              </Card>

              <Menubar className="fixed bottom-0 left-0 right-0 w-[55%] bg-white border-t border-gray-200 shadow-md z-50 md:hidden flex justify-center mx-auto my-[20px] shadow-md">
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
                    <a href="#about"><Mail className="w-5 h-5" /></a>
                  </MenubarTrigger>
                </MenubarMenu>
              </Menubar>
            </section>
          </section>
        </main>
      </BackgroundBeamsWithCollision>
    </>
  );
}
