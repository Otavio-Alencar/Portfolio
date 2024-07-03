import animation from "@/animations/animation-home.json";
import Lottie from "lottie-react"
import { useLayoutEffect, useRef } from "react";
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export const Home = ()=>{ 
    const el = useRef(null)
    const tl = useRef<gsap.core.Timeline | null>(null)
    useLayoutEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        const ctx = gsap.context(()=>{
            tl.current = gsap.timeline({
                scrollTrigger:{
                    trigger:".models-item",
                    endTrigger: '#title',
                    markers: true,
                    scrub:true,
                    start: "top 500px",
                    end: "bottom 600px"


                }
            })
            .fromTo(".model-1",{
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
        <div  className="h-[100vh]  flex justify-center lg:justify-between items-center bg-white dark:bg-dark-color mx-9 lg:mx-auto md:container ">
            <div id="home" className="lg:w-1/2 flex flex-col gap-7 ">
                <div className="flex flex-col gap-7">
                    <h1 id="title"  className="font-bold  text-3xl md:text-5xl text-primary-color dark:text-white text-center lg:text-start models-item model-1">Seja bem vindo ao meu Portfólio</h1>
                    <p id="model-2" className="text-center lg:text-start models-item">Meu nome é Otávio Alencar e aqui vou mostrar meus projetos e minhas habilidades como programador front-end.</p>
                   
                </div>
                <div id="model-3" className="flex gap-3 flex-col lg:flex-row models-item">
                    
                    <Link to='projects' className="bg-light-color px-5 py-1 rounded-md font-medium dark:text-primary-color cursor-pointer flex items-center justify-center"  spy={true} smooth={true} offset={-70} duration={500}>Começar</Link>
                    
                    <Link to='contact' className="cursor-pointer bg-transparent border border-primary-color text-primary-color px-5 py-1 rounded-md font-medium dark:text-white flex justify-center" spy={true} smooth={true} offset={-250} duration={500} >Contato</Link> 
                </div>
            </div>
            <div className="hidden lg:flex w-5/12">
                <Lottie animationData={animation}/>
            </div>
        </div>
    )
}