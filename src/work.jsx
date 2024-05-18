import React from 'react'

const Work = () => {
  return (
    <>
    
            <div className='w-[100%] max-w-[36.3rem] aspect-square mx-auto relative bg-cover rounded-sm ' style={{backgroundImage: "url('./sokky.jpg')"}}>
                
                <div className='size-[100%] bg-gradient-to-t from-black absolute bottom-0 pt-[83%] md:pt-[88%] p-5'>
                  <div className='flex flex-row justify-between items-center'>

                    <div className='flex flex-row justify-between items-center text-blue-600'>
                      <p className=' text-nowrap mr-6 font-bold text-lg text-white'>CODE USED</p>
                      <div><i class='bx bxl-html5 text-3xl'></i></div>
                      <div><i class='bx bxl-tailwind-css text-3xl'></i></div>
                      <div><i class='bx bxl-react text-3xl' ></i></div>
                    </div>

                    <a href='https://sokky.vercel.app/' target='_blank'><div className='bttn'>CHECK</div></a>

                  </div>
                </div> 
            </div>


            <div className='w-[100%] max-w-[36.3rem] aspect-square mx-auto  relative bg-cover  rounded-sm ' style={{backgroundImage: "url('./syzn.png')"}}>
                <div className='size-[100%] bg-gradient-to-t from-black absolute bottom-0 pt-[83%] md:pt-[88%] p-5'>
                  <div className='flex flex-row justify-between items-center'>

                    <div className='flex flex-row justify-between items-center text-blue-600'>
                      <p className=' text-nowrap mr-6 font-bold text-lg text-white'>CODE USED</p>
                      <div><i class='bx bxl-html5 text-3xl'></i></div>
                      <div><i class='bx bxl-tailwind-css text-3xl'></i></div>
                      <div><i class='bx bxl-react text-3xl' ></i></div>
                    </div>


                    <a href='https://syzn.vercel.app/' target='_blank'><div className='bttn'>CHECK</div></a>

                  </div>
                </div> 
            </div>

    </>

  )
}

export default Work;



// border-4 border-[#1E40AF]