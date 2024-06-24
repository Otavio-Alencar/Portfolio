import MenuIcon from '@mui/icons-material/Menu';
import { ModeToggle } from './toggle-theme';
export const Header = ()=>{
    return(
        <header className="fixed bg-white left-0 top-0 w-full">
            <div className="md:container mx-9 flex justify-between md:mx-auto py-7">
                <div className="text-primary-color">
                    OalencarDev
                </div>
                <ul className=" gap-8 text-primary-color hidden lg:flex items-center">
                        <li>Inicio</li>
                        <li>Projetos</li>
                        <li>Sobre mim</li>
                        <li>Contato</li> 
                        <ModeToggle></ModeToggle>
                 </ul>
                
                 <div className='lg:hidden'>
                    <MenuIcon/>
                 </div>
            </div>
        </header>
    )
}