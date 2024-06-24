import MenuIcon from '@mui/icons-material/Menu';
export const Header = ()=>{
    return(
        <header className="fixed bg-white left-0 top-0 w-full">
            <div className="md:container mx-9 flex justify-between md:mx-auto py-7">
                <div className="text-primary-color">
                    OalencarDev
                </div>
                <ul className=" gap-8 text-primary-color hidden md:flex">
                        <li>Inicio</li>
                        <li>Projetos</li>
                        <li>Sobre mim</li>
                        <li>Contato</li>
                 </ul>
                 <div className='md:hidden'>
                    <MenuIcon/>
                 </div>
            </div>
        </header>
    )
}