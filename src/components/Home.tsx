import animation from "@/animations/animation-home.json";
import Lottie from "lottie-react"
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
export const Home = ()=>{ 
    return(
        <div className="h-[100vh]  flex justify-center lg:justify-between items-center bg-white dark:bg-dark-color mx-9 lg:mx-auto md:container ">
            <div className="lg:w-1/2 flex flex-col gap-7 ">
                <div className="flex flex-col gap-7">
                    <h1 className="font-bold  text-3xl md:text-5xl text-primary-color dark:text-white text-center lg:text-start">Seja bem vindo ao meu Portfólio</h1>
                    <p className="text-center lg:text-start">Meu nome é Otávio Alencar e aqui vou mostrar meus projetos e minhas habilidades como programador front-end</p>
                   
                </div>
                <div className="flex gap-3 flex-col lg:flex-row">
                    
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