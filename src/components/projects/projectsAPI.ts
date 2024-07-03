import {ProjectType  } from "@/types/projectType";
export const ProjectsApi:ProjectType[] = [
    {
        id:1,
        type: 'landing',
        img: '/images/telaProjeto/telaSite.png',
        imgModal:'/images/telaProjeto/telamodalLoja.png',
        languages: ['NextJs','ReactJS','TypeScript'],
        title: 'Loja virtual landing',
        description: 'Loja virtual onde ao realizar o seu pedido, é enviado automaticamente uma mensagem via whatsapp para o vendedor',
        linkGit: 'https://github.com/Otavio-Alencar/BaseLoja',
        linkSite:'https://loja-mockup.vercel.app'
    }
]