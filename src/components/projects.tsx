import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CarouselModal } from "./projects/carousel"
import { ProjectItems } from "./projects/items"
import { useState } from "react"
import { Actived } from "@/types/activedType"
import SwipeLeftIcon from '@mui/icons-material/SwipeLeft';
export const Projects=  ()=>{
    const [activedMenu,setActived] = useState('todos')
    return(
        <div className="min-h-screen flex flex-col justify-start" id="projects">
            <div className=" md:mx-auto md:container lg:m-2">
                <Card className="bg-transparent  border-[#88c0d065] dark:border-[#88c0d022] shadow-2xl py-2 w-10/12 mx-auto my-10" >
                    <CardHeader className="flex flex-col gap-4">
                        <CardTitle className="text-[#444e60] dark:text-white flex justify-between">
                            <p>Projetos</p>
                            <SwipeLeftIcon className="animate-pulse lg:hidden"/>
                        </CardTitle>
                        <ul className="hidden lg:flex gap-3 text-[#4C566A] dark:text-white">
                                <li className={`text-sm cursor-pointer text-start ${activedMenu === 'todos' && 'actived'}`} onClick={()=>setActived('todos')}>Todos</li>
                                <li className={`text-sm cursor-pointer text-start ${activedMenu === 'landing' && 'actived'}`} onClick={()=>setActived('landing')}>Landing Pages</li>
                                <li className={`text-sm cursor-pointer text-start ${activedMenu === 'api' && 'actived'}`} onClick={()=>setActived('api')}>API Requests</li>
                                <li className={`text-sm cursor-pointer text-start ${activedMenu === 'form' && 'actived'}`} onClick={()=>setActived('form')}>Forms</li>
                            </ul>
                        </CardHeader>
                        <CardContent className="p-0 w-full overflow-hidden">
                          
                            <CarouselModal/>
                            <ProjectItems actived={`${activedMenu}`}/>
                        </CardContent>
                        
                </Card>
            </div>
        </div>
    )
}