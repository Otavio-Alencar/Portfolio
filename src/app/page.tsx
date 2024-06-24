import { Home } from "@/components/Home"
import { Header } from "@/components/header"
import { Projects } from "@/components/projects"

export const Page = ()=>{
  return(
    <>
    <Header/>
    <div className="min-h-screen container mx-auto">
      <Home/>
      <Projects/>
    </div>
    </>
  )
}

export default Page