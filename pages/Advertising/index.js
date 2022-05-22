import AddNavbar from '../../components/AddNavbar/index'
import Link from 'next/link'

export default function Advertising(){
    return(
        <div className=''>
            <AddNavbar/>
            <div class="min-h-screen justify-center bg-[url('/job.png')]">
                <div className='grid xs:grid-cols-1 md:grid-cols-5'>
                            <div className='grid col-span-1'>
                            </div>
                    <Link href="/Jobadd">
                        <div className='grid col-span-1 justify-center mt-5 '>
                            <div class="h-auto w-auto flex flex-col items-center justify-center bg-blue-500 rounded-lg cursor-pointer hover:bg-lime-500 transition delay-75 hover:text-white">
                                <h1 className='py-10 px-10 text-center'>Ажлын зар нэмэх</h1>
                            </div>
                        </div>
                    </Link>
                    <div className='grid col-span-1 justify-center mt-5'>
                    <div class="h-auto w-auto flex flex-col items-center justify-center bg-blue-500 rounded-lg cursor-pointer hover:bg-lime-500 transition delay-75 hover:text-white">
                            <h1 className='py-10 px-10 text-center'>Түрээсийн зар нэмэх</h1>
                        </div>
                    </div>
                    <div className='grid col-span-1 justify-center mt-5'>
                    <div class="h-auto w-auto flex flex-col items-center justify-center bg-blue-500 rounded-lg cursor-pointer hover:bg-lime-500 transition delay-75 hover:text-white">
                            <h1 className='py-10 px-10 text-center'>Хальт ажлын зар нэмэх</h1>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}