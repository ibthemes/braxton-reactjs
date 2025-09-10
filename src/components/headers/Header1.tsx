
import menuItems from "@/data/menu.json";
import { useEffect, useState } from "react";
import ThemeSwitcherButton from "./ThemeSwitcherButton";

export default function Header1() {
  const [activeSection, setActiveSection] = useState(
    menuItems[0].href.replace("#", "")
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px" }
    );

    setTimeout(() => {
      menuItems.forEach((elm) => {
        const element = document.querySelector(elm.href);
        if (element) observer.observe(element);
      });
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.querySelector<HTMLElement>(id);
    targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header id="header" className="header d-flex justify-content-between">
      <div className="header__navigation">
        <nav id="menu" className="menu">
          <ul className="menu__list d-flex justify-content-start">
            {menuItems.map((item, idx) => (
              <li className="menu__item" key={idx}>
                <a
                  className={
                    activeSection == item.href.replace("#", "")
                      ? "menu__link btn active"
                      : "menu__link btn"
                  }
                  onClick={(e) => handleClick(e, item.href)}
                  href={item.href}
                >
                  <span className="menu__caption">{item.caption}</span>
                  <i className={item.icon} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="header__controls d-flex justify-content-end">
        <ThemeSwitcherButton />
        <a
          id="notify-trigger"
          className="header__trigger btn"
          href="mailto:example@example.com?subject=Message%20from%20your%20site"
        >
          <span className="trigger__caption">Let&apos;s Talk</span>
          <i className="ph-bold ph-chat-dots" />
        </a>
      </div>
    </header>
  );
}
