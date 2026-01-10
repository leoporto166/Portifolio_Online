import './App.css'
import foto from "../src/assets/foto.jpeg"
import curriculo from "../src/assets/Leonardo Porto.pdf"

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function App() {


  return (
    <>
      <main className='Body h-screen'>
        <section className=''>

        </section>

        <section className='flex justify-between h-75 items-center  p-2'>
          <div>
            <h1 className='text-white text-5xl font-extrabold'>Olá, eu sou o <br /> <p className='text-green-400 text-shadow-lg text-shadow-white/10 mb-4 '>Leonardo Porto</p></h1>


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

        <div className='linha'></div>

        <section>

          <div className='p-2'>
            <h2 className='text-green-400 text-3xl font-extrabold'>Resumo Pessoal</h2>

            <p className='text-white'>
              Sou estudante de Engenharia de Software, com formação complementar em Redes de Computadores e Assistente em Inteligência Artificial, em constante desenvolvimento na área de tecnologia. Tenho interesse em desenvolvimento de software, infraestrutura e soluções que unam programação, automação e boas práticas de TI.
              <br />
              <br />
              Possuo conhecimentos em JavaScript, TypeScript, React, fundamentos de redes, lógica de programação e noções de Git e GitHub, sempre buscando evoluir por meio de estudos práticos, projetos pessoais e cursos de aperfeiçoamento. Sou uma pessoa curiosa, organizada e colaborativa, com facilidade para aprender novas tecnologias e trabalhar em equipe.
              <br />
              <br />
              Busco oportunidades que me permitam aplicar meus conhecimentos, crescer profissionalmente e contribuir com soluções eficientes e inovadoras.
            </p>
          </div>  

          <div className='linha'></div>  

        </section>

        <section>

          <div className='p-2'>
            <h2 className='text-green-400 text-3xl font-extrabold'>Meus Projetos</h2>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={3}
                spaceBetween={0}
                navigation
                autoplay = {{delay: 500}}
                breakpoints={{}}
          >
            <SwiperSlide>
              <img src={foto} className='w-50'></img>
            </SwiperSlide>

            <SwiperSlide>
              <img src={foto} className='w-50'></img>
            </SwiperSlide>
            
          </Swiper>

        </section>
      </main>
    </>
  )
}

export default App
