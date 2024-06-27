export const Technologies = ()=>{
    return(
        <div className="bg-[#D8DEE9] dark:bg-dark-color  py-6 w-full">
            <div className="md:container mx-9 md:mx-auto flex flex-col gap-8">
                {/* tecnologias  */}
                <div className=" flex flex-col lg:items-center">
                    <h1 className="text-[#444e60]  dark:text-white font-semibold text-2xl mb-3">Tecnologias</h1>
                    <div className="flex overflow-x-scroll lg:overflow-x-auto gap-6 pb-4 scrollbar-thin scrollbar-thumb-[#88C0D0] scrollbar-track-[#88c0d04a] scrollbar-thumb-rounded-full">
                        <div className="p-2 bg-transparent border border-[#88c0d04a] rounded-md flex flex-col items-center justify-center h-[90px]">
                            <div className="flex">
                                <img src="/images/html-icon.png" className="w-[50px] h-[50px]" alt="" />
                                <img src="/images/css-icon.png" className="w-[50px] h-[50px]" alt="" />
                            </div>
                            <h2 className="text-[#444e60] dark:text-white font-bold whitespace-nowrap ">HTML & CSS</h2>
                        </div>
                        <div className="p-2 bg-transparent border border-[#88c0d04a] rounded-md flex flex-col items-center justify-center h-[90px]">
                            <img src="/images/javascript-icon.png" className="w-[50px] h-[50px]" alt="" />
                            <h2 className="text-[#444e60] dark:text-white font-bold ">JAVASCRIPT</h2>
                        </div>
                        <div className="p-2 bg-transparent border border-[#88c0d04a] rounded-md flex flex-col items-center justify-center h-[90px]">
                            <img src="/images/typescript-icon.png" className="w-[50px] h-[50px]" alt="" />
                            <h2 className="text-[#444e60] dark:text-white font-bold ">TYPESCRIPT</h2>
                        </div>
                        <div className="p-2 bg-transparent border border-[#88c0d04a] rounded-md flex flex-col items-center justify-center h-[90px]">
                            <img src="/images/tailwind-icon.png" className="w-[50px] h-[50px]" alt="" />
                            <h2 className="text-[#444e60] dark:text-white font-bold ">TAILWIND</h2>
                        </div>
                        <div className="p-2 bg-transparent border border-[#88c0d04a] rounded-md flex flex-col items-center justify-center h-[90px]">
                            <img src="/images/react-icon.png" className="w-[50px] h-[50px]" alt="" />
                            <h2 className="text-[#444e60] dark:text-white font-bold whitespace-nowrap ">REACT JS</h2>
                        </div>
                        <div className="p-2 bg-transparent border border-[#88c0d04a] rounded-md flex flex-col items-center justify-center h-[90px]">
                            <img src="/images/next-icon.png" className="w-[50px] h-[50px]" alt="" />
                            <h2 className="text-[#444e60] dark:text-white font-bold whitespace-nowrap">NEXT JS</h2>
                        </div>
                        
                         
                    </div>
                </div>
              
                
            </div>
        </div>
    )
}