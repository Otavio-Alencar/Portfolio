import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import { ProjectsApi } from "@/components/projects/projectsAPI";
export const CarouselModal = ()=>{
    return(
        <Carousel className=" lg:hidden">
            <CarouselContent className="">
                {ProjectsApi.map((item,index)=>(
                    <CarouselItem className="flex flex-col gap-5 md:gap-10 items-center justify-center pb-10 ">
                    <div className="h-36 w-full flex items-center justify-center">
                        <img className=" w-full" src={item.img} alt="" />
                    </div>
                    <div className="p-2 flex flex-col gap-7">
                        <h1 className="text-2xl text-center">{item.title}</h1>
                        <p className="text-center text-xs">{item.description}</p>
                        <div className="flex mx-2 gap-2">
                            <a href={item.linkGit} target="_blank" className="cursor-pointer flex p-1 bg-light-color rounded-md items-center justify-center gap-1 w-1/2">
                                <img src="/images/links/github-dark.png" className="h-[26px]" alt="" />
                                <span className="text-xs">Link Do repositório</span>
                            </a>
                            <a href={item.linkSite} target="_blank" className="cursor-pointer flex p-1 bg-light-color rounded-md items-center justify-center gap-1 w-1/2 ">
                                <img src="/images/links/site-dark.png" alt="" className="h-[26px]" />
                                <span className="text-xs">Link Do Site</span>
                            </a>
                        </div>
                    </div>
                    </CarouselItem>

                ))}
                
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>
    )
}