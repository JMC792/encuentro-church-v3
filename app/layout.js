// These styles apply to every route in the application
import Footer from '@components/footer/Footer';
import Navbar from '@components/headers/Navbar';
import layout from '/public/locales/english/layout.json';

// Data
import footer from '/public/locales/english/footer.json';

import '@styles/globals.css'
import { Inter } from "next/font/google"
import logo from "public/icons/logo.svg"
import call from "public/icons/call2.svg"
import email from "public/icons/email.svg"

export const metadata = {
  title: {
    //template: "%s | " + [layout.title],
    default: 'Encuentro Church',
  },
  description: "Encuentro Church is a multi-cultural and multi-lingual christian church located in Charlotte, North Carolina. We are dedicated to helping people from all walks of life find the lord and live in his name everyday. Services begin Sunday at 11:00am at our Charlotte campus and online",
  appliationName: "Encuentro Church",
  creator: "Mauricio Chavez",
  publisher: "Mauricio Chavez",
};

const inter =Inter({subsets:['latin']})

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar
          link1 = {layout.sitemap.home} //Home
          link2 = {layout.sitemap.about} //About
          link3 = {layout.sitemap.portfolio} //Portfolio
          link4 = {layout.sitemap.contact} //Contact
          link5 = {layout.sitemap.service} //Service
          phoneNumber = {layout.number}
          logo = {logo}
        />
          {children}
        <Footer
          overview = {[
            layout.title, 
            layout.description,
            logo
          ]}
          internal={[
            layout.sitemap.home, //Home
            layout.sitemap.about, //About
            //layout.sitemap.portfolio, //Portfolio
            layout.sitemap.contact, //Contact
            layout.sitemap.service, //Service
          ]}
          outgoing={[
            [footer.socialMedia.media1.title, footer.socialMedia.media1.link], //Instagram
            
            [footer.socialMedia.media3.title, footer.socialMedia.media3.link], //Facebook
          ]}
          contact= {[
            [footer.contact.phone.title, footer.contact.phone.link, call, "call"],
            [footer.contact.email.title, footer.contact.email.link, email, "email"],
          ]}
          trademark={[
            footer.trademark.year,
            footer.trademark.company,
            footer.trademark.rights
          ]}
        />
      </body>
    </html>
  );
}
