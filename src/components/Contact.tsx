import { useLayoutEffect, useRef, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { DrawerContact } from "./contact/drawerContact"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export const Contact = ()=>{
    const el = useRef(null)
    const tl = useRef<gsap.core.Timeline | null>(null)
    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(()=>{
            tl.current = gsap.timeline({
                scrollTrigger:{
                    trigger:".models-item",
                    endTrigger: '#contact',
                    //markers: true,
                    scrub:true,
                    start: "top 500px",
                    end: "bottom 600px"


                }
            })
            .fromTo("#model-1",{
                opacity:0,
                y:90
            },{
                opacity:1,
                y:0,
                ease: 'power1.inOut'
            })
            .fromTo("#model-2",{
                opacity:0,
                y:120,
                ease: 'power1.inOut'
            },{
                opacity:1,
                y:0
            })
            .fromTo("#model-3",{
                opacity:0,
                y:150,
                ease: 'power1.inOut',

            },{
                opacity:1,
                y:0,
            })
        },el)

        return ()=>{
            gsap.killTweensOf('.models-item')
        }
    },[])
    return(
        <div className="min-h-screen bg-white dark:bg-[#232731] flex flex-col justify-center items-center smooth-wrapper modals-container">
            <h1 className="text-2xl font-semibold">Contato</h1>
            <div ref={el}  className=" flex flex-col md:flex-row  items-center justify-center gap-5 lg:gap-10 py-10 models-content">
                
                <DrawerContact>
                    
                        <Card data-lag='2' id="model-1" className={`bg-[#D8DEE9] dark:bg-dark-color md:h-56 lg:h-72 justify-center items-center flex flex-col px-2 lg:px-5 hover:border-1 hover:border-[#88c0d0b9] cursor-pointer text-[#444e60] dark:text-white hover:scale-[1.1] hover:transition-all ease models-item `}>
                        <div id="contact">
                            <CardHeader>
                                <CardTitle >Enviar Email</CardTitle>
                            </CardHeader>
                            <CardContent  className="flex items-center justify-center ">
                                <img className="lg:h-40" src="/images/email-icon.png" alt="" />
                            </CardContent>
                        </div>
                                        </Card>
                    
                </DrawerContact>
               
                    <Card data-lag='1' id="model-2" className={`bg-[#D8DEE9] dark:bg-dark-color md:h-56 lg:h-72 justify-center items-center flex flex-col px-2 lg:px-5 hover:border-1 hover:border-[#88c0d0b9] cursor-pointer text-[#444e60] dark:text-white hover:scale-[1.1] hover:transition-all ease models-item`}>
                        <CardHeader>
                            <CardTitle>Meu currículo</CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-center ">
                            <img className="lg:h-40" src="/images/email-icon.png" alt="" />
                        </CardContent>
                    </Card>
              
                <Card data-lag='0.5' id="model-3" className={`bg-[#D8DEE9] dark:bg-dark-color md:h-56 lg:h-72 justify-center items-center flex flex-col px-2 lg:px-5 hover:border-1 hover:border-[#88c0d0b9] cursor-pointer text-[#444e60] dark:text-white hover:scale-[1.1] hover:transition-all ease models-item`}>
                    <CardHeader>
                        <CardTitle>Minhas Redes</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center ">
                        <img className="lg:h-40" src="/images/email-icon.png" alt="" />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}