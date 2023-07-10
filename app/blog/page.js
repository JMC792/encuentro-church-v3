import Hero2 from "app/about/Hero2";
import { Fragment } from "react";
import en from "dictionaries/en.json"
import List from "./List";
import about4 from "public/images/arianeMacias.jpg"
import blogData from "public/data/articles.json"

export default function Page(){
    
    return(
        <Fragment>
            <Hero2
                heroTitle={en.blog.hero.title}
                heroSubtitle={en.blog.hero.subtitle}
            />
            <List
                title={en.blog.list.title}
                heading={en.blog.list.subtitle}
                sentence={en.blog.list.sentence}
                image={about4}
                blogData={blogData}

            />
        </Fragment>
    )
}