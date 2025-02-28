import {Fragment} from "react";
//Components
import Hero from "@components/hero/Hero";
import Centered2x2 from "@components/features/Centered2x2";
import TwoColumnDark from "@components/features/TwoColumnDark";
import SimpleCentered from "@components/testimonials/SimpleCentered";
import Form3 from "@components/forms/Form3.js";

//Locales/Data
import layout from "public/locales/english/layout.json";
import language from "/public/locales/english/homepage.json";
import contact from "public/locales/english/contact.json";

// Icons

// Images
import image4 from "/public/images/homepage/photo1.jpeg";
import Newsletter from "../components/newsletter/CTA1";
import ProductScreenshot from "@components/features/ProductScreenshot";
import Team3 from "@components/team/Team3";

export default function Page() {
  return (
        <Fragment>
            <Hero  
            />

            {/* Services */}
            <Centered2x2
              heading = {language.index.services.heading}
              title = {language.index.services.title}
              paragraph = {language.index.services.paragraph}
            />

            {/* About Us */}
            <ProductScreenshot
              heading={language.index.about.heading} 
              title={language.index.about.title} 
              paragraph={language.index.about.paragraph.one}
              image={image4}
            />

            {/* Why Choose Us */}
            {/* <TwoColumnDark
              heading={language.index.mission.heading}
              title={language.index.mission.title}
              paragraph1={language.index.mission.paragraph1}
              paragraph2={language.index.mission.paragraph2}
              paragraph3={language.index.mission.paragraph3}
              paragraph4={language.index.mission.paragraph4}
            /> */}

            {/* Testimonial */}
            <SimpleCentered
              name={language.index.testimonials.name}
              paragraph={language.index.testimonials.paragraph}
              position={language.index.testimonials.position}
            />
            <Team3/>

            {/* Newsletter */}
            {/* <Newsletter
              heading={language.index.newsletter.heading}
              title={language.index.newsletter.title}
              sentence={language.index.newsletter.sentence}
              button={language.index.newsletter.button.title}
              buttonLink={language.index.newsletter.button.link}
              background="bg-back-2"
            /> */}
            <Form3
                    title = {contact.form.title}
                    paragraph = {contact.form.paragraph}
                    phone = {layout.number}
                    email = {layout.email}
                  />
        </Fragment>
  );
}
