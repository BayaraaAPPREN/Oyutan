import { FcReadingEbook } from 'react-icons/fc';
import Link from 'next/link'
import Dropdown from '../Dropdown/index'

export default function Navbar(){
    return(
        <div className="grid justify-end font-serif">
            <div className="text-slate-100 inline-block my-5 ">
                <div className="inline-block mr-5">
                   <FcReadingEbook size={40} className="xs:invisible sm:visible sm:block xs:hidden"/>
                </div>
                <div className='inline-block'>
                   <h1 className=' uppercase mr-20 text-3xl text-yellow-300'>Багш оюутан</h1>
                </div>
                <div className='inline-block'>
                    <Dropdown/>
                </div>
                <div className='inline-block'>
                   <h1 className=" m-4 cursor-pointer hover:text-yellow-300 xs:invisible sm:visible sm:block xs:hidden">Нүүр</h1>
                </div>
                <div className='inline-block'>
                  <h1 className=" cursor-pointer hover:text-yellow-300  m-4 xs:invisible sm:visible sm:block xs:hidden">Бидэнтэй холбогдох</h1>
                </div>
                <div className='inline-block'>
                <Link href="/Login">
                    <button className="xs:invisible sm:visible sm:block xs:hidden ml-96  m-4 bg-yellow-400 py-2 px-10 rounded-lg hover:bg-white hover:text-yellow-300 transition delay-75">Нэвтрэх</button>
                </Link>
                    </div>
                <div className='inline-block'>
                <Link href="Register">
                   <button className="xs:invisible sm:visible sm:block xs:hidden m-4 hover:rounded-lg rounded-lg hover:bg-yellow-400 py-2 px-6 transition delay-75">Бүртгүүлэх</button>
                </Link>
                </div>
            </div>
        </div>
    )
}