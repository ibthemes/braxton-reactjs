import ParallaxBackground from "@/components/backgrounds/ParallaxBackground";
import "../../public/css/demo-styles.css";

import ThemeSwitcherButton from "@/components/headers/ThemeSwitcherButton";
import Intro from "@/components/preview/Intro";
import Pages from "@/components/preview/Pages";
import Footer from "@/components/preview/Footer";
import Backtotop from "@/components/preview/Backtotop";
import MetaComponent from "@/components/meta/MetaComponent";
const metadata = {
  title: "Preview || Braxton - Personal Portfolio & Resume Reactjs Template",
  description: "Braxton - Personal Portfolio & Resume Reactjs Template",
};
export default function PreviewPage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <div className="demo">
        <ParallaxBackground />
        <>
          {/* Top Controls (Button and Color Switcher) Start */}
          <div className="demo__controls d-flex">
            <ThemeSwitcherButton parentClass="color-switcher btn mobile-horizontal btn-square btn-hover btn-hover-transparent" />
            <a
              className="btn mobile-horizontal btn-square-mobile btn-hover btn-hover-accent"
              href="https://themeforest.net/user/elite-themes24/portfolio"
              target="_blank"
            >
              {/* template link here */}
              <span className="btn-caption">Purchase</span>
              <i className="ph-bold ph-shopping-cart" />
            </a>
          </div>
          {/* Top Controls (Button and Color Switcher) End */}
          {/* Demo Content Start */}
          <main className="demo__content">
            {/* Intro Start */}
            <Intro />
            {/* Intro End */}
            {/* Live Preview Links Start */}
            <Pages />
            {/* Live Preview Links End */}
          </main>
          {/* Demo Content End */}
          {/* Footer Start */}
          <Footer />
          {/* Footer End */}
          {/* To Top Button Start */}
          <Backtotop />
        </>
      </div>
    </>
  );
}
