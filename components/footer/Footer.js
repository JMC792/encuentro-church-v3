import { Fragment } from "react"

// Components
import Overview from "./Overview"
import Internal from "./Internal"
import Outgoing from "./Outgoing"
import Trademark from "./Trademark"
import Contact from "./Contact"

export default function Footer(props) {

  return (
    <Fragment>
      <footer className="bg-gray-900">
        {/* Footer Container */}
        <div className="container text-white">
          {/* Footer padding and Margin */}
          <div className="py-20">
            {/* Footer Layout*/}
            <div className="grid gap-y-20 lg:flex lg:justify-between items-start">
              <Overview
                title = {props.overview[0]}
                description = {props.overview[1]}
                image = {props.overview[2]}
              />
              <Internal
                links={props.internal}/>
              <Outgoing 
                title= {"Social Media"}
                links= {props.outgoing}
              />
              <Contact 
                title= {"Contact"}
                links={[
                  [props.contact[0][0], props.contact[0][1], props.contact[0][2], props.contact[0][3]],
                  [props.contact[1][0], props.contact[1][1], props.contact[1][2], props.contact[1][3]]
                ]}
              />
            </div>
          </div>

          {/*----------------------- Dividing Line ----------------------- */}
          <hr className="border-neutral-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          {/*----------------------- Trademark ----------------------- */}
          <Trademark
            year = {props.trademark[0]}
            company = {props.trademark[1]}
            rights = {props.trademark[2]}
          />
        </div>
      </footer>
    </Fragment>
  );
}
