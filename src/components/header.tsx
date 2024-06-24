export const Header = ()=>{
    return(
        <header className="fixed bg-white left-0 top-0 w-full">
            <div className="container flex justify-between mx-auto py-7">
                <div className="text-primary-color">
                    OalencarDev
                </div>
                    <ul className="flex gap-8 text-primary-color">
                        <li>Inicio</li>
                        <li>Projetos</li>
                        <li>Sobre mim</li>
                        <li>Contato</li>
                    </ul>
            </div>
        </header>
    )
}