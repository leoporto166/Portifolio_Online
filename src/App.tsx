import './App.css'
import foto from "../src/assets/foto.jpeg"
import curriculo from "../src/assets/Leonardo Porto.pdf"

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import siteGec from "./assets/site_gec.png"
import { useState } from 'react';
import videoGO from "./assets/Vido_site_go.mp4"
import { FiX } from "react-icons/fi";

function App() {

  const [open, setOpen] = useState(false)


  return (
    <>
      <main className='Body '>
        <section className=''>

        </section>

        <section className='flex justify-between p-2'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-white text-5xl font-extrabold'>Olá, eu sou o <br /> <p className='text-green-400 text-shadow-lg text-shadow-white/10 mb-4 '>Leonardo Porto</p></h1>


            <a href={curriculo}
            download
            className='text-white bg-green-600 p-2 rounded-2xl hover:bg-white transition-all duration-600 hover:text-green-600 w-23 text-center'
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

          <div className='p-2 flex flex-col '>
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



          <section className='flex p-2 '>

            <div className='border-2 border-green-400 rounded-lg w-110 h-90 mr-2 flex flex-col items-center shadow-lg shadow-white/8'>

              <div className='w-[360px] flex my-2'>

                <h1 className='text-white text-2xl font-bold'>Projeto Goias Esporte Clube</h1>

              </div>
              <img src={siteGec} alt="Imagem site Goias" className='w-90 h-55 mt-2' />

              <div className='w-[360px] flex mt-2'>
                <button
                onClick={() => setOpen(true)}
                >
                <p className='bg-green-300 p-1 rounded-xl font-medium cursor-pointer hover:bg-amber-50/0 
                border border-green-300 hover:text-white transition-all duration-300'>Abrir previa</p>
                </button>
              </div>

              
          {open && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg w-200 shadow-lg h-200 justify-center items-center flex flex-col">
                <div className='w-full justify-end flex mb-2'>
                  <button onClick={() => setOpen(false)}>
                  <FiX size={25} className='cursor-pointer'></FiX>
                  
                                 </button>
                </div>

               <video className='w-130 mb-2'
               autoPlay 
               loop 
               muted
               controls={false}
               >
                <source  src={videoGO} type='video/mp4'/>
                 Seu navegador não suporta o video.
               </video>

               <p>
                Desenvolvimento de um site institucional moderno e responsivo, utilizando React como framework principal. O projeto conta com layout personalizado, identidade visual alinhada ao clube e foco em experiência do usuário.


                <br />
                <br />

                Foram implementados menus responsivos, carrosséis dinâmicos de notícias e jogos com Swiper, além da organização de componentes reutilizáveis. O projeto também utiliza Tailwind CSS para uma estilização eficiente e consistente, garantindo boa performance e adaptação a diferentes tamanhos de tela.

                <br />
                <br />

                Além disso, o sistema conta com autenticação de usuários, incluindo login e senha, controle de acesso e proteção de rotas, assegurando que determinadas áreas da aplicação sejam acessadas apenas por usuários autenticados.

                <br />
                <br />

                O objetivo foi simular um portal esportivo profissional, destacando conteúdos relevantes como notícias, partidas e informações do clube, aplicando boas práticas de desenvolvimento front-end, organização de código e conceitos básicos de segurança na aplicação.
               </p>
              </div>
            </div>
          )}

          
            </div>   


          </section>

  

        </section>
      </main>
    </>
  )
}

export default App
