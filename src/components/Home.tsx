export const Home = ()=>{
    return(
        <div className="min-h-screen flex justify-center md:justify-start items-center ">
            <div className="md:w-1/2 flex flex-col gap-7">
                <div className="flex flex-col gap-7">
                    <h1 className="font-bold text-4xl text-primary-color text-center md:text-start">Seja bem vindo ao meu Portfólio</h1>
                    <p className="text-center md:text-start">Meu nome é Otávio Alencar e aqui vou mostrar meus projetos e minhas habilidades como programador front-end</p>
                </div>
                <div className="flex gap-3 flex-col md:flex-row">
                    <button className="bg-light-color px-4 py-1 rounded-md font-medium">Começar</button>
                    <button className="bg-transparent border border-primary-color text-primary-color px-4 py-1 rounded-md font-medium">Contato</button>
                </div>
            </div>
        </div>
    )
}