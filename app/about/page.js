import { Fragment } from "react";
//locales
import about from "public/locales/english/about.json";
import language from "public/locales/english/homepage.json";

// Components
import Hero2 from "../../components/hero/Hero2.js";
import ProductScreenshot from "@components/features/ProductScreenshot.js";
import TwoColumnDark from "@components/features/TwoColumnDark.js";
import Newsletter from "@components/newsletter/CTA1.js";

//Images
import image4 from "/public/images/homepage/homepage1.webp";

//SVG


export const metadata = {
  title:"About Us"
}

export default function Page() {

  return (
    <Fragment>
      <Hero2 
        heroTitle={about.hero.title} 
        heroSubtitle={about.hero.subtitle}  
        background={"bg-back-about"}
      />
      <ProductScreenshot
        heading={language.index.about.heading} 
        title={language.index.about.title} 
        paragraph={language.index.about.paragraph.one}
        image={image4}
      />
      {/* <TwoColumnDark
        heading={language.index.mission.heading}
        title={language.index.mission.title}
        paragraph1={language.index.mission.paragraph1}
        paragraph2={language.index.mission.paragraph2}
        paragraph3={language.index.mission.paragraph3}
        paragraph4={language.index.mission.paragraph4}
      /> */}
    </Fragment>
  );
}
