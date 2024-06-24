export const Technologies = ()=>{
    return(
        <div className="bg-dark-color py-6 w-full">
            <div className="md:container mx-9 md:mx-auto flex flex-col gap-8">
                {/* tecnologias  */}
                <div className=" flex flex-col lg:items-center">
                    <h1 className="text-white font-semibold text-2xl mb-3">Tecnologias</h1>
                    <div className="flex overflow-x-scroll gap-6">
                        <div className="p-2 bg-transparent border border-light-color rounded-md flex flex-col items-center justify-center">
                            <img src="/images/html-icon.png" className="w-[40px] h-[50px]" alt="" />
                            <h2 className="text-white font-bold ">HTML</h2>
                        </div>
                        <div className="p-2 bg-transparent border border-light-color rounded-md flex flex-col items-center justify-center">
                            <img src="/images/css-icon.png" className="w-[50px] h-[50px]" alt="" />
                            <h2 className="text-white font-bold ">CSS</h2>
                        </div>
                        <div className="p-2 bg-transparent border border-light-color rounded-md flex flex-col items-center justify-center">
                            <img src="/images/javascript-icon.png" className="w-[50px] h-[50px]" alt="" />
                            <h2 className="text-white font-bold ">JAVASCRIPT</h2>
                        </div>
                        <div className="p-2 bg-transparent border border-light-color rounded-md flex flex-col items-center justify-center">
                            <img src="/images/typescript-icon.png" className="w-[50px] h-[50px]" alt="" />
                            <h2 className="text-white font-bold ">TYPESCRIPT</h2>
                        </div>
                        <div className="p-2 bg-transparent border border-light-color rounded-md flex flex-col items-center justify-center">
                            <img src="/images/tailwind-icon.png" className="w-[50px] h-[50px]" alt="" />
                            <h2 className="text-white font-bold ">TAILWIND</h2>
                        </div>
                        <div className="p-2 bg-transparent border border-light-color rounded-md flex flex-col items-center justify-center">
                            <img src="/images/react-icon.png" className="w-[50px] h-[50px]" alt="" />
                            <h2 className="text-white font-bold whitespace-nowrap ">REACT JS</h2>
                        </div>
                        <div className="p-2 bg-transparent border border-light-color rounded-md flex flex-col items-center justify-center">
                            <img src="/images/next-icon.png" className="w-[50px] h-[50px]" alt="" />
                            <h2 className="text-white font-bold whitespace-nowrap">NEXT JS</h2>
                        </div>
                        
                         
                    </div>
                </div>
              
                
            </div>
        </div>
    )
}