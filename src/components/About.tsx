export const About = ()=>{
    return(
        <div id="about" className="min-h-screen flex items-center dark:bg-[#232731]">
                <div className="flex flex-col justify-around min-h-screen lg:container lg:mx-auto mx-9 md:container py-10">
                    <h1 className="text-2xl md:text-3xl font-bold text-start mt-5 border-light-color text-[#444e60] dark:text-white after:content-['']  ">Sobre Mim</h1> 
                    <div className=" lg:mx-auto flex flex-col-reverse items-center lg:flex-row lg:justify-between">
                    
                    <div className="lg:w-1/2 h-full flex flex-col items-center justify-between lg:items-start">
                    
                        <h1 className="text-lg md:text-xl hidden lg:flex font-semibold lg:mb-5 text-[#444e60] dark:text-white">Otávio Alencar</h1>
                        <ul className="flex flex-col gap-2">
                            <li className="flex md:whitespace-nowrap text-sm border-b border-[#88c0d04e] p-2">✔️  18 anos</li>
                            <li className="flex text-sm border-b border-[#88c0d04e] p-2">👨🏻‍💻 Desenvolvendo interfaces com Javascript e Typescript desde o começo de 2024</li>
                            <li className="flex md:whitespace-nowrap text-sm border-b border-[#88c0d04e] p-2">🎓 Cursando Ciência da Computação na UFAPE</li>
                            <li className="flex md:whitespace-nowrap text-sm border-b border-[#88c0d04e] p-2">💡 Interesse em desenvolvimento front-end</li>
                            <li className="flex md:whitespace-nowrap text-sm border-b border-[#88c0d04e] p-2">🚀 Buscando oportunidade como desenvolvedor</li>
                        </ul>
                    </div>
                    <div className="flex flex-col py-2 items-center lg:justify-end w-full lg:flex-row lg:w-1/2 ">
                        <div className="lg:w-8/12 xl flex justify-center lg:justify-end rounded-full lg:rounded-none overflow-hidden w-7/12 md:w-5/12 border-2 dark:border-[#88c0d063] border-[#88c0d0f7] border-separate lg:p-2">
                            <img className="w-full" src="/images/perfil.jpg" alt="Minha foto" />
                        </div>
                        <h1 className="text-lg md:text-xl font-semibold lg:hidden">Otávio Alencar</h1>
                    </div>
                </div>
                </div>
        </div>
    )
}