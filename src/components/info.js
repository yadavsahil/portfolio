import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaYoutube as Youtube,
  FaLinkedin as LinkedIn,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        Sahil.
      </div>
      <div className="h1 code mt-4 mb-3">async {"{"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        A Passionate Front-end Developer, UI/UX Enthusiast, Android Geek and Web
        Developer.
        
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://twitter.com/Sahil___Yadav">
          <Twitter />
        </a>
        <a className="mr-5 icon" href="https://www.linkedin.com/in/sahil-yadav-35844514b/">
          <LinkedIn />
        </a>
        <a className="mr-5 icon" href="https://github.com/yadavsahil">
          <Github />
        </a>
        <a className="mr-5 icon" href="mailto://yadav.sahil52@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}
