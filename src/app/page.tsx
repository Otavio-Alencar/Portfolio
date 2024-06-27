"use client"
import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Home } from "@/components/Home"
import { Header } from "@/components/header"
import { Projects } from "@/components/projects"
import { Technologies } from "@/components/technologies"
export const Page = ()=>{
  return(
    <div className="dark:bg-[#2e3440]">
    <Header/>
      <div id="home" className="">
        <Home/>
      </div>
      <div className="relative hidden dark:flex mt-[-200px] ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#232731" fill-opacity="1" d="M0,64L48,64C96,64,192,64,288,69.3C384,75,480,85,576,117.3C672,149,768,203,864,202.7C960,203,1056,149,1152,122.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <div className="dark:bg-[#232731]">
          <Projects/>
      </div>
      
      <Technologies/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Page