import NavSection from "@/components/nav-section";
import { NAV_LINKS_ID } from "./constants";
import HireMeButton from "@/components/hire-me-button";

export default function Home() {
  return (
    <main>
      <NavSection id={NAV_LINKS_ID.ABOUT_ME} className="mb-20">
        <div className="flex max-w-[40vw] py-10">
          <div className="text-6xl pr-4">🚀</div>
          <div>
            <span className="font-bold text-2xl text-primary">Hello, I am</span>
            <h1 className="font-bold text-6xl">Louis Leonardo</h1>
            <h2 className="font-medium text-4xl text-blue py-3">
              Fullstack Developer
            </h2>
            <p className="py-10 font-medium leading-7">
              As a Full Stack Freelance Developer, I specialize in JavaScript
              technologies such as React.js for dynamic front-end experiences
              and Node.js with Express.js and Nest.js on the back-end.
              Proficient in TypeScript, I deliver scalable, modern, and
              responsive websites. Let's build something great together!
            </p>
            <div className="flex gap-10">
              <HireMeButton />
              <button className="font-medium">Download CV</button>
            </div>
          </div>
        </div>
        <div>
          <div className="shadow-lg rounded-xl inline-block p-4 max-w-[400px]">
            <div className="flex">
              <div className="bg-[grey] rounded-full w-[50px] h-[50px] mr-3" />
              <div>
                <span className="block">Louis Leonardo</span>
                <span className="text-[grey] text-sm">
                  {new Date().toDateString()}
                </span>
              </div>
            </div>
            <p className="py-10 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              laudantium voluptas iure eaque? Velit quae culpa dolor in tempore
              accusantium.
            </p>
          </div>
        </div>
      </NavSection>
      <NavSection id={NAV_LINKS_ID.SERVICES}>
        <div className="grid grid-cols-2">
          <div />
          <div>
            <span className="font-bold text-2xl text-primary">A BIT</span>
            <h2 className="font-bold text-6xl py-3">About Me</h2>
            <p className="pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              neque placeat, ipsa iusto eum voluptates totam exercitationem
              earum aspernatur fugit. Laudantium ex enim eius. Eum perferendis
              aut quis quia obcaecati non culpa fugit voluptas at, ea natus
              doloremque eaque maiores a aliquam asperiores tempore
              necessitatibus optio animi voluptatibus corporis debitis.
            </p>
          </div>
        </div>
      </NavSection>
      <NavSection id={NAV_LINKS_ID.PORTFOLIO}>Portfolio</NavSection>
      <NavSection id={NAV_LINKS_ID.TESTIMONIALS}>Testimonials</NavSection>
      <NavSection id={NAV_LINKS_ID.CONTACT_US}>Contact Us</NavSection>
    </main>
  );
}
