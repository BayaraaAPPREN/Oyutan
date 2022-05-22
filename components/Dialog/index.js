import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { db } from '../../firebase'
import { addDoc, collection, serverTimestamp } from "@firebase/firestore"

export default function MyModal() {
  const [zar, setZar] = useState({ title: "", detail: ""});
  let [isOpen, setIsOpen] = useState(false)

  const onSubmit = async () => {
    const collectionRef = collection(db, "zar")
    const docRef = await addDoc(collectionRef, {...zar, timestamp: 
    serverTimestamp() })
    setZar({ title: '', detail: ''})
    alert('Амжилттай нийтэллээ!!! баяр хүргэе')
    setIsOpen(false)
}

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="mt-4">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-lime-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
        >
           Зар оруулах
        </button>
      </div>
      <pre>{JSON.stringify(zar)}</pre>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Зараа оруулаарай
                  </Dialog.Title>
                  <div className="mt-2 text-sm text-gray-500">
                    <h1 className='mb-2'>Гарчиг</h1>
                    <input id="title" type="text" name="title" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Гарчиг"
                    value={zar.title}
                    onChange={ e => setZar({...zar, title:e.target.value})}
                    />
                  </div>

                  <div className="mt-2 text-sm text-gray-500">
                    <h1 className='mb-2'>Нэмэлт мэдээлэл</h1>
                    <textarea id="title" type="text" name="title" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Нэмэлт мэдээлэл" 
                    value={zar.detail}
                    onChange={ e => setZar({...zar, detail:e.target.value})}
                    />
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    <h1 className='mb-2'>Зураг</h1>
                    <input id="title" type="file" name="title" class="" />
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    <h1 className='mb-2'>Ажлын хөлс</h1>
                    <input id="title" type="text" name="title" class="text-sm placeholder:text-xs sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Ажлын зар бол ажлын хөлс / Түрээсийн зар бол түрээслэх үнэ" />
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    <h1 className='mb-2'>Зарын хэлбэр</h1>
                    <select id="title" type="text" name="title" class="text-sm placeholder:text-xs sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Ажлын зар бол ажлын хөлс / Түрээсийн зар бол түрээслэх үнэ" >
                      <option className='rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 '>Ажлын зар</option>
                      <option className='rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 '>Хальтхан ажлын зар</option>
                      <option className='rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400 '>Түрээсийн зар</option>
                    </select>
                  </div>

                  <div className="mt-4 grid justify-center  ">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-200 px-20 py-2 text-sm font-medium transition delay-75 text-blue-900 hover:bg-lime-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={onSubmit}
                    >
                      Нийтлэх
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
