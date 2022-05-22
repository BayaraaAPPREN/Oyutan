import Link from 'next/link'


export default function NavbarOpen(){
    return(
        <div className="bg-blue-700">
            <div className="grid grid-col justify-center">

                <div className="inline-block  text-slate-100 py-4 font-serif text-sm">
                        <div className="inline-block mr-20 text-xl">
                            <h1 className="inline-block font-bold text-white">MUIS.</h1>
                            <h1 className="inline-block text-lime-300 font-bold">BAGSH.OYUTAN.MN</h1>
                        </div>
                        <div  className="inline-block">
                          <h1 className="cursor-pointer mr-4">Ажлын зар</h1>
                        </div>
                        <div  className="inline-block">
                          <h1 className="cursor-pointer mr-4">Түрээсийн зар</h1>
                        </div>
                        <div  className="inline-block mr-20">
                          <h1 className="cursor-pointer mr-4">Хальтхан ажлын зар</h1>
                        </div>
                        <div className="inline-block ml-20">
                            <Link href="/Jobadd">
                            <button className="bg-lime-500 rounded-sm py-2 px-4 font-bold text-white hover:bg-lime-600
                             hover:text-slate-200 transition delay-75">Зар нэмэх</button>
                             </Link>
                        </div>
                </div>

            </div>
        </div>
    )
}