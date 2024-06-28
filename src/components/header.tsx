import MenuIcon from '@mui/icons-material/Menu';
import { ModeToggle } from './toggle-theme';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
export const Header = ()=>{
    return(
        <header className="fixed bg-white dark:bg-dark-color left-0 top-0 w-full z-50">
            <div className="md:container mx-9 flex justify-between md:mx-auto py-7 items-center">
                <div className="text-primary-color dark:text-white flex items-center gap-2">
                    <div className='h-[36px] w-[36px] flex '>
                        <img src="/images/logo/logo-branca.png" className='hidden dark:flex' alt="" />
                        <img src="/images/logo/logo-preta.png" className='dark:hidden' alt="" />
                    </div>
                    <span>OalencarDev</span>
                </div>
                <ul className=" gap-8 text-primary-color dark:text-white hidden lg:flex items-center">
                        <Link to='home' className="cursor-pointer"  spy={true} smooth={true} offset={50} duration={200}>Inicio</Link>
                        <Link to='projects' className="cursor-pointer"  spy={true} smooth={true} offset={-100} duration={500}>Projetos</Link>
                        <Link to='about' className="cursor-pointer"  spy={true} smooth={true} offset={50} duration={500}>Sobre mim</Link>
                        <Link to='contact' className="cursor-pointer"   spy={true} smooth={true} offset={-250} duration={500} >Contato</Link> 
                        <ModeToggle></ModeToggle>
                 </ul>
                
                 <div className='lg:hidden'>
                    <Sheet>
                        <SheetTrigger><MenuIcon/></SheetTrigger>
                        <SheetContent className='bg-white dark:bg-dark-color flex flex-col gap-10'>
                            <SheetHeader>
                                <SheetTitle className='text-dark-color dark:text-white flex items-center'>
                                    Portfolio
                                    <ModeToggle/>
                                </SheetTitle>
                                </SheetHeader>
                                <ul className='flex flex-col items-start justify-center gap-5'>
                                    <li className='flex items-center cursor-pointer bg-transparent gap-2 p-1 text-dark-color dark:text-white  '>    
                                    <HomeIcon/>
                                    <Link to='home' className="cursor-pointer"  spy={true} smooth={true} offset={-20} duration={200}>Inicio</Link>
                                    </li>
                                    <li className='flex items-center cursor-pointer bg-transparent p-1 text-dark-color dark:text-white gap-2 '>
                                        <AccountTreeIcon/>
                                        <Link to='projects' className="cursor-pointer"  spy={true} smooth={true} offset={-70} duration={500}>Projetos</Link>
                                        
                                        </li>
                                    <li className='flex items-center cursor-pointer bg-transparent p-1 gap-2 text-dark-color dark:text-white '>
                                        <InfoIcon/>
                                        <Link to='about' className="cursor-pointer"  spy={true} smooth={true} offset={-50} duration={500}>Sobre mim</Link>
                                        </li>
                                    <li className='flex items-center cursor-pointer bg-transparent p-1 gap-2 text-dark-color dark:text-white '>
                                        <CallIcon/>
                                        <Link to='contact' className="cursor-pointer"   spy={true} smooth={true} offset={-160} duration={500} >Contato</Link> 
                                        </li>
                                </ul>
                            
                        </SheetContent>
                    </Sheet>
                   
                 </div>
            </div>
        </header>
    )
}