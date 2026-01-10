import './App.css'
import foto from "../src/assets/foto.jpeg"
import curriculo from "../src/assets/Leonardo Porto.pdf"

function App() {


  return (
    <>
      <main className='Body h-screen'>
        <section className=''>

        </section>

        <section className='flex justify-between h-80 items-center  p-2'>
          <div>
            <h1 className='text-white text-5xl font-extrabold'>Olá, eu sou o <br /> <p className='text-green-400 text-shadow-lg text-shadow-white/10 '>Leonardo Porto</p></h1>

            <p className='text-gray-400 font-medium mb-2'>Desenvolvedor Front-end</p>

            <a href={curriculo}
            download
            className='text-white bg-green-600 p-2 rounded-2xl hover:bg-white transition-all duration-600 hover:text-green-600'
            >
              Baixar CV
            </a>

          </div>

          <div>
            <img src={foto} className='h-50 rounded-full hover:mb-10 transition-all duration-500 hover:shadow-xl shadow-green-300/10'></img>
          </div>
        </section>

        <div className='w-full h-[1px] bg-white'></div>
      </main>
    </>
  )
}

export default App
