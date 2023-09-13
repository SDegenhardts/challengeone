import Image from "next/image"
import portrait from "../public/portrait.png"

export default function Home() {
  return (
    <div>
      <header className="bg-yellow-300 w-full h-24 flex justify-between p-14">
        <div className="flex items-center w-full justify-between">
          <div className="flex gap-32">
          <button className="hover:bg-black border-4 border-solid hover:border-yellow-300 p-2 rounded-xl w-24 hover:text-yellow-300 bg-yellow-250 text-black border-black hover:scale-125">Heim</button>
          <button className="hover:bg-black border-4 border-solid hover:border-yellow-300 p-2 rounded-xl w-24 hover:text-yellow-300 bg-yellow-250 text-black border-black hover:scale-125">Um</button>
          </div>
          <Image width={80} height={80} src={('/drachenblack.png')} alt={'drachen'}/>
          <div className="flex gap-32">
          <button className="hover:bg-black border-4 border-solid hover:border-yellow-300 p-2 rounded-xl w-24 hover:text-yellow-300 bg-yellow-250 text-black border-black hover:scale-125">Kontakt</button>
          <button className="hover:bg-black border-4 border-solid hover:border-yellow-300 p-2 rounded-xl w-28 hover:text-yellow-300 bg-yellow-250 text-black border-black hover:scale-150">Registrieren</button>
          </div>
        </div>
      </header>
      <div className="flex justify-center items-center m-16">
        <Image width={1000} height={300} src={(portrait)} alt={'portrait'} />
      </div>
      <footer className='bg-black text-yellow-300 flex justify-evenly py-10'>
        <div className='flex flex-col'>
          <h1 className='font-bold text-3xl'>Kontakt</h1>
          <ol className=' text-left'>
            <li>info</li>
            <li>info</li>
            <li>info</li>
          </ol>
        </div>
        <div className='flex flex-col'>
          <h1 className='font-bold text-3xl'>Mein Pannel</h1>
          <ol className=' text-left'>
            <li>info</li>
            <li>info</li>
            <li>info</li>
          </ol>
        </div>
        <div className='flex flex-col'>
          <h1 className='font-bold text-3xl'>Mehr info</h1>
          <ol className=' text-left'>
            <li>info</li>
            <li>info</li>
            <li>info</li>
          </ol>
        </div>
      </footer>

    </div>
  )

}
