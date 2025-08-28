import About from "@/components/about/About";
import GradientBackground from "@/components/backgrounds/GradientBackground";

import Contact from "@/components/contact/Contact";
import Header1 from "@/components/headers/Header1";
import Intro from "@/components/intro/Intro";
import MetaComponent from "@/components/meta/MetaComponent";
import Portfolio from "@/components/portfolio/Portfolio";
import Profile from "@/components/profile/Profile";
import Education from "@/components/resume/Education";
import Experience from "@/components/resume/Experience";
import ResumeHeading from "@/components/resume/ResumeHeading";
import Tools from "@/components/resume/Tools";
import Testimonials from "@/components/testimonials/Testimonials";

const metadata = {
  title:
    "Home Gradient || Braxton - Personal Portfolio & Resume Reactjs Template",
  description: "Braxton - Personal Portfolio & Resume Reactjs Template",
};
export default function HomeGradientPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Header1 />
      <GradientBackground />
      <Profile profileImage="/img/avatars/1024x1024_a02.webp" />
      <div id="content" className="content">
        <div className="content__wrapper">
          <Intro />
          <Portfolio />
          <About />
          <section id="resume" className="inner resume">
            <ResumeHeading />
            <Education />
            <Experience />
            <Tools />
            <Testimonials />
          </section>
          <Contact />
        </div>
      </div>
    </>
  );
}
