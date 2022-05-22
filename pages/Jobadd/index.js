import AddNavbar from '../../components/AddNavbar/index'
import Dialog from '../../components/Dialog'


export default function Advertising(){
    return(
        <div className=''>
            <AddNavbar/>
            <div class="min-h-screen justify-center bg-[url('/job.png')]">
                    <div className='grid xs:grid-cols-1 md:grid-cols-5 font-serif justify-center'>
                        <div className='grid col-span-1 xs:invisible sm:visible sm:block xs:hidden'></div>
                        <div className='grid col-span-1  m-4 '>
                            <div className='grid justify-center bg-slate-200'>
                                <img src='/zurag1.jpg' className='rounded-full mt-4 h-32 w-32 grid justify-center'/>
                                <h1 className='text-center mb-6 mt-4'>Bayarsuren Enkbaatar</h1>
                            </div>
                            <div className='bg-slate-200 mt-8'>
                                <h1 className='m-4'>Цэс</h1>
                                <div className='ml-8 '>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='grid col-span-2 bg-slate-200 m-4'>
                            <div className='grid justify-center'>
                               <div className='inline-block text-xs'>
                                   <div className='inline-block mr-40'>
                                     <h1 className='mt-4 grid justify-start'>Таны орууласан зарууд</h1>
                                   </div>
                                   <div className='inline-block ml-10'>
                                    <div className=' '>
                                    <Dialog/>
                                    </div>
                                   </div>
                               </div>
                            </div>
                        </div>
                    </div>
           </div>
        </div>
    )
}