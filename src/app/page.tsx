import NavSection from "@/components/nav-section";
import { NAV_LINKS_ID } from "./constants";
import HireMeButton from "@/components/hire-me-button";
import AboutMeItem from "@/components/about-me-item";
import ServicesItem from "@/components/services-item";
import Link from "next/link";
import SectionTitle from "@/components/section-title";
import PortfolioItem from "@/components/portfolio-item";
import ContactUsItem from "@/components/contact-us-item";
import Input from "@/components/input";

export default function Home() {
  return (
    <main>
      <section>
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
              responsive websites. Let&rsquo;s build something great together!
            </p>
            <div className="flex gap-10">
              <HireMeButton />
              <button className="font-medium">Download CV</button>
            </div>
          </div>
        </div>
        <div>
          <div className="shadow-lg rounded-xl inline-block p-4 max-w-[500px]">
            <div className="flex">
              <div className="bg-[grey] rounded-full w-[50px] h-[50px] mr-3" />
              <div>
                <span className="block">Louis Leonardo</span>
                <span className="text-[grey] text-sm">
                  {new Date().toDateString()}
                </span>
              </div>
            </div>
            <p className="py-5 leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              laudantium voluptas iure eaque? Velit quae culpa dolor in tempore
              accusantium.
            </p>
          </div>
        </div>
      </section>
      <NavSection id={NAV_LINKS_ID.ABOUT_ME}>
        <div className="grid grid-cols-2">
          <div>
            <span className="font-bold text-2xl text-primary">A BIT</span>
            <h2 className="font-bold text-5xl py-3">About Me</h2>
            <p className="pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              neque placeat, ipsa iusto eum voluptates totam exercitationem
              earum aspernatur fugit. Laudantium ex enim eius. Eum perferendis
              aut quis quia obcaecati non culpa fugit voluptas at, ea natus
              doloremque eaque maiores a aliquam asperiores tempore
              necessitatibus optio animi voluptatibus corporis debitis.
            </p>
            <Link href="/">Explore All Services</Link>
            <div className="flex flex-wrap gap-5 mt-10">
              <AboutMeItem title="5 Year+" subtitle="Experience" />
              <AboutMeItem title="700+" subtitle="Projects" />
              <AboutMeItem title="24/7" subtitle="Customer Support" />
            </div>
          </div>
        </div>
      </NavSection>
      <NavSection id={NAV_LINKS_ID.SERVICES}>
        <SectionTitle category="SERVICES" title="Check My Services" />
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <ServicesItem
            title="Landing Page Design"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati in adipisci harum, fugit quae. Optio doloremque magni architecto sunt!"
          />
          <ServicesItem
            title="Mobile App Design"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati in adipisci harum, fugit quae. Optio doloremque magni architecto sunt!"
          />
          <ServicesItem
            title="Branding"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati in adipisci harum, fugit quae. Optio doloremque magni architecto sunt!"
          />
        </div>
        <div className="grid place-items-center py-10">
          <HireMeButton />
        </div>
      </NavSection>
      <NavSection id={NAV_LINKS_ID.PORTFOLIO}>
        <SectionTitle category="PORTFOLIO" title="People Lie Work Don't" />
        <div className="text-right mb-5">
          <Link href="/">Explore All Services</Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full place-items-center gap-5">
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
        </div>
        <div className="grid place-items-center py-10">
          <HireMeButton />
        </div>
      </NavSection>
      <NavSection id={NAV_LINKS_ID.TESTIMONIALS}>
        <SectionTitle category="TESTIMONIALS" title="What People Says" />
        <SectionTitle category="OUR CLIENTS" title="What Makes Me Proud" />
      </NavSection>
      <NavSection id={NAV_LINKS_ID.CONTACT_US}>
        <div className="flex justify-between bg-[grey] p-10">
          <div className="max-w-72 mt-10">
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <p className="pt-5 pb-20 max-w-96">
              We are committed to processing the information in order to contact
              you and talk about your project
            </p>
            <div>
              <ContactUsItem label="example@teamwebflow.com" />
              <ContactUsItem label="4074 Ebert Summit Suite 375 Lake LeonardChester" />
              <ContactUsItem label="+44 123 654 7890" />
            </div>
          </div>
          <div>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Website" />
            <Input placeholder="" />
          </div>
        </div>
      </NavSection>
    </main>
  );
}
