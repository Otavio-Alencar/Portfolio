import { DialogDescription } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination"

type Props = {
    actived:string
}
import { ProjectsApi } from "@/components/projects/projectsAPI";
export const ProjectItems = ({actived}:Props)=>{
    var limitedItems = ProjectsApi.slice(0,6)
    var limitedLanding = ProjectsApi.filter((item)=> item.type=== 'landing')
    limitedLanding =  limitedLanding.slice(0,6)
    var limitedApi = ProjectsApi.filter((item)=> item.type=== 'api')
    limitedApi =  limitedApi.slice(0,6)
    var limitedForm = ProjectsApi.filter((item)=> item.type=== 'form')
    limitedForm =  limitedForm.slice(0,6)


    
    return(
        <div className={`hidden lg:grid grid-cols-2 grid-rows-1 overflow-hidden max-h-fit0,6)} lg:grid-cols-2 xl:grid-cols-3 gap-3 mx-6`}>
            {/* dialog todos  */}
            {actived === 'todos' && limitedItems.map((item,index)=>(
                <Dialog>
                    <DialogTrigger className="flex justify-start flex-col ">
                    <div className="lg:h-44 lg:w-64 rounded-lg bg-gray-300 flex overflow-hidden flex-col justify-between ">
                        <img className=" h-full w-full" src={item.img}>
                        </img>
                    </div>
                    <h1 className="font-normal text-sm ml-2 text-[#444e60] dark:text-white">{item.title}</h1>
                    </DialogTrigger>
                    <DialogContent className="flex dark:bg-dark-color h-[500px] max-w-[1000px] ">
                        <div className="flex-2 flex flex-col rounded-md overflow-hidden">
                           <img className="w-full h-full" src={item.imgModal} alt="" />
                        </div>
                        <div className="flex flex-col gap-8 justify-center flex-1  h-full ">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-4xl font-semibold text-[#444e60] dark:text-white">{item.title}</h1>
                                <p className="text-sm text-[#444e60] dark:text-white">{item.description}</p>
                            </div>
                            <div className="flex gap-2">
                                {item.languages.map((lang,langIndex) => (
                                    <div key={langIndex} className="p-2 text-xs bg-[#D8DEE9] dark:bg-[#4C566A] dark:text-white text-dark-color rounded-full">{lang}</div>
                                ))}
                            </div>
                            <div className="flex flex-col gap-2">
                                <a href={item.linkGit} target="_blank" className="cursor-pointer flex p-1 bg-light-color rounded-md items-center justify-center gap-1">

                                    <img src="/images/links/github-dark.png" className="h-[32px]" alt="" />
                                    <span className="text-[#444e60] dark:text-white">Link Do repositório</span>
                                    
                                </a>
                                <a href={item.linkSite} target="_blank" className="cursor-pointer flex p-1 bg-light-color rounded-md items-center justify-center gap-1">
                                    <img src="/images/links/site-dark.png" alt="" className="h-[31px]" />
                                    <span className="text-[#444e60] dark:text-white">Link Do Site</span>
                                    
                                </a>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
                
                
            ))}
            {/* dialog landing  */}
            {actived === 'landing' && limitedLanding.map((item,index)=>(
                <Dialog>
                    <DialogTrigger className="flex justify-start flex-col">
                    <div className="lg:h-44 lg:w-64 rounded-lg bg-gray-300 flex overflow-hidden flex-col justify-between">
                        <img className=" h-full w-full" src={item.img}>
                        </img>
                    </div>
                    <h1 className="font-medium text-sm ml-2">{item.title}</h1>
                    </DialogTrigger>
                    <DialogContent className="flex dark:bg-dark-color h-[500px] max-w-[1000px] ">
                        <div className="flex-2 flex flex-col rounded-md overflow-hidden">
                           <img className="w-full h-full" src={item.imgModal} alt="" />
                        </div>
                        <div className="flex flex-col gap-5 justify-center flex-1  h-full ">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-4xl font-semibold">{item.title}</h1>
                                <p className="text-sm">{item.description}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <a href={item.linkGit} target="_blank" className="cursor-pointer flex p-1 bg-light-color rounded-md items-center justify-center gap-1">

                                    <img src="/images/links/github-dark.png" className="h-[32px]" alt="" />
                                    <span>Link Do repositório</span>
                                    
                                </a>
                                <a href={item.linkSite} target="_blank" className="cursor-pointer flex p-1 bg-light-color rounded-md items-center justify-center gap-1">
                                    <img src="/images/links/site-dark.png" alt="" className="h-[31px]" />
                                    <span>Link Do Site</span>
                                    
                                </a>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
                
                
            ))}
            {/* dialog api  */}
            {actived === 'api' && limitedApi.map((item,index)=>(
                <Dialog>
                    <DialogTrigger className="flex justify-start flex-col">
                    <div className="lg:h-44 lg:w-64 rounded-lg bg-gray-300 flex overflow-hidden flex-col justify-between">
                        <img className=" h-full w-full" src={item.img}>
                        </img>
                    </div>
                    <h1 className="font-medium text-sm ml-2">{item.title}</h1>
                    </DialogTrigger>
                    <DialogContent className="flex dark:bg-dark-color h-[500px] max-w-[1000px] ">
                        <div className="flex-2 flex flex-col rounded-md overflow-hidden">
                           <img className="w-full h-full" src={item.imgModal} alt="" />
                        </div>
                        <div className="flex flex-col gap-5 justify-center flex-1  h-full ">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-4xl font-semibold">{item.title}</h1>
                                <p className="text-sm">{item.description}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <a href={item.linkGit} target="_blank" className="cursor-pointer flex p-1 bg-light-color rounded-md items-center justify-center gap-1">

                                    <img src="/images/links/github-dark.png" className="h-[32px]" alt="" />
                                    <span>Link Do repositório</span>
                                    
                                </a>
                                <a href={item.linkSite} target="_blank" className="cursor-pointer flex p-1 bg-light-color rounded-md items-center justify-center gap-1">
                                    <img src="/images/links/site-dark.png" alt="" className="h-[31px]" />
                                    <span>Link Do Site</span>
                                    
                                </a>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
                
                
            ))}
            {/* dialog form  */}
            {actived === 'form' && limitedForm.map((item,index)=>(
                <Dialog>
                    <DialogTrigger className="flex justify-start flex-col">
                    <div className="lg:h-44 lg:w-64 rounded-lg bg-gray-300 flex overflow-hidden flex-col justify-between">
                        <img className=" h-full w-full" src={item.img}>
                        </img>
                    </div>
                    <h1 className="font-medium text-sm ml-2">{item.title}</h1>
                    </DialogTrigger>
                    <DialogContent className="flex dark:bg-dark-color h-[500px] max-w-[1000px] ">
                        <div className="flex-2 flex flex-col rounded-md overflow-hidden">
                           <img className="w-full h-full" src={item.imgModal} alt="" />
                        </div>
                        <div className="flex flex-col gap-5 justify-center flex-1  h-full ">
                            <div className="flex flex-col gap-3">
                                <h1 className="text-4xl font-semibold">{item.title}</h1>
                                <p className="text-sm">{item.description}</p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <a href={item.linkGit} target="_blank" className="cursor-pointer flex p-1 bg-light-color rounded-md items-center justify-center gap-1">

                                    <img src="/images/links/github-dark.png" className="h-[32px]" alt="" />
                                    <span>Link Do repositório</span>
                                    
                                </a>
                                <a href={item.linkSite} target="_blank" className="cursor-pointer flex p-1 bg-light-color rounded-md items-center justify-center gap-1">
                                    <img src="/images/links/site-dark.png" alt="" className="h-[31px]" />
                                    <span>Link Do Site</span>
                                    
                                </a>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
                
                
            ))}

           
             
            
            
        </div>
    )
}