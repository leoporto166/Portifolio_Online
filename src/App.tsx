import './App.css'
import foto from "../src/assets/foto.jpeg"
import curriculo from "../src/assets/Leonardo Porto.pdf"



import siteGec from "./assets/site_gec.png"
import { useState } from 'react';
import videoGO from "./assets/Vido_site_go.mp4"
import { FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiMysql,
  SiFirebase
} from "react-icons/si";

import { FaBrain } from "react-icons/fa";


  const tecnologias = [
    {icon: <SiJavascript size={20}/>, nome:"JavaScript"},
    {icon: <SiHtml5 size={20}/>, nome:"HTML5"},
    {icon: <SiCss3 size={20}/>, nome:"CSS3"},
    {icon: <SiReact size={20}/>, nome:"React"},
    {icon: <SiTailwindcss size={20}/>, nome:"Tailwindcss"},
    {icon: <SiGit size={20}/>,
    nome:"Git"},
    {icon: <FaGithub size={20}/>, nome:"GitHub"},
    {icon: <SiMysql size={20}/>,
    nome:"Mysql"},
    {icon: <FaBrain size={20}/>,
    nome:"IA"},
    {icon: <SiFirebase size={20} />,
    nome:"FireBase"}
    
  ]
function App() {

  const [open, setOpen] = useState(false)
  const [modo, setModo] = useState(true)
  const [lingua, setLingua] = useState(true)


  return (
    <>
    { lingua ? ( 
      <>
    { modo ? (
    <>

      <header className='h-15 bg-black'>

        <div className='text-white flex items-center w-full h-15 gap-2 p-2 justify-between font-bold text-lg'>
          <a className='cursor-pointer' href='#Resumo'>Resumo</a>
          <a className='cursor-pointer' href='#Projetos'>Projetos</a>
          <a className='cursor-pointer' href='#Tec'>Tecnologias</a>

          <div className='flex gap-2'>
            <div className='flex flex-col items-center'>
              <button onClick={() => {setLingua(true)}} className='cursor-pointer'>Português</button>
              <div className={lingua ? "bg-green-600 rounded-full w-1 h-1" : "text-black"}></div>
            </div>
            <div className='flex flex-col items-center'>
              <button onClick={() => {setLingua(false)}}className='cursor-pointer'>Inglês</button>
              <div className={lingua ? "" : "bg-green-600 rounded-full w-1 h-1"}></div>
            </div>
          </div>

          {modo ? (
            <div className='border border-green-300 w-15 rounded-2xl text-[15px]'>
            <button className='bg-green-800 w-6 rounded-full text-green-800 cursor-pointer' onClick={() => {setModo(false)}}>a</button>
          </div>
          ) : (
            <div className='border border-green-300 w-15 rounded-2xl'>
            <div className='flex justify-end'><button className='bg-white w-6 rounded-full text-white cursor-pointer' onClick={() => {setModo(true)}}>a</button></div>
            </div>
          )
          
          }
          

        </div>

      </header>
      <div className='bg-green-600 w-full h-[1px] shadow-lg shadow-white/8'></div>
      <main className='Body select-none'>
        <section className=''>

        </section>

        <section className='flex justify-between p-2'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-white text-5xl font-extrabold'>Olá, eu sou o <br /> <p className='text-green-400 text-shadow-lg text-shadow-white/10 mb-4 '>Leonardo Porto</p></h1>


            <div className='flex items-center gap-2'>
              <a href={curriculo}
              download
              className='text-black bg-green-600 p-2 rounded-2xl hover:bg-white transition-all duration-600 w-23 text-center font-medium'
              >
                Baixar CV
              </a>

              <a href="https://github.com/leoporto166" target='_blank'>
                <FaGithub className='text-green-500 hover:text-white transition-all duration-600 cursor-pointer' size={25}></FaGithub>
              </a>
              <a href="https://www.linkedin.com/in/leonardo-porto-63a087382/" target='_blank'>
                <FaLinkedin className=' text-green-500 hover:text-white transition-all duration-600 cursor-pointer' size={25}></FaLinkedin>
              </a>
            </div>

          </div>

          <div>
            <img src={foto} className='h-50 rounded-full hover:mb-10 transition-all duration-500 hover:shadow-xl shadow-green-300/10 border-2 border-green-600'></img>
          </div>
        </section>

        <div className='linha'></div>

        <section id='Resumo'>

          <div className='p-2 flex flex-col '>
            <h2 className='text-green-400 text-3xl font-extrabold text-shadow-lg text-shadow-white/10 '>Resumo Pessoal</h2>

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

        <section id='Projetos'>

          <div className='p-2'>
            <h2 className='text-green-400 text-3xl font-extrabold mb-2 text-shadow-lg text-shadow-white/10 '>Meus Projetos</h2>
          </div>

          <section className='flex p-2 '>

            <div className='border-2 border-green-800 rounded-lg w-110 h-90 mr-2 flex flex-col items-center shadow-lg shadow-white/8 bg-black hover:mt-[-12px] hover:mb-4 transition-all duration-300'>

              <div className='w-[360px] flex my-2'>

                <h1 className='text-white text-2xl font-bold'>Projeto Goias Esporte Clube</h1>

              </div>
              <a href="https://leoporto166.github.io/Projeto_Goias/" target='_blank'><img src={siteGec} alt="Imagem site Goias" className='w-90 h-55 mt-2 border border-white' /></a>

              <div className='w-[360px] flex mt-2 items-center gap-2'>
                <button
                onClick={() => setOpen(true)}
                >
                <p className='text-black bg-green-600 p-2 rounded-2xl hover:bg-white transition-all duration-600 text-center font-medium cursor-pointer'>Abrir previa</p>
                </button>

                <a href="https://github.com/leoporto166/Projeto_Goias/tree/main/goias-app" target='_blank' className=''>
                  <FaGithub size={25} className='text-green-500 hover:text-white transition-all duration-600 cursor-pointer'></FaGithub>
                </a>
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

        <div className='linha'></div>


        <section id='Tec'>

          <div className='p-2'>
            <h2 className='text-green-400 text-3xl font-extrabold text-shadow-lg text-shadow-white/10 '>Stack Tecnológico</h2>
          

            <div className='flex '>
              <div className='gap-5 mt-5 flex flex-wrap'>
                {
                  tecnologias.map((tech, index) => (
                    <div
                    key={index}
                    className='flex items-center hover:text-white hover:mb-5 transition-all duration-300'
                    >

                      <span className='text-black bg-white p-2 rounded-2xl hover:bg-black hover:text-white transition-all duration-600 font-medium w-35 flex justify-between'>{tech.nome} <span className=''>{tech.icon}</span></span>

                    </div>
                  ))
                }
              </div>
            </div>

            <div className='flex items-center flex-col mt-5'>

              <div className='w-full max-w-[1000px] flex'>
                <h3 className='text-white font-bold text-xl mb-2'>Historico GitHub - 2025</h3>
              </div>

              <div className='border border-green-200 w-full max-w-[1000px] flex justify-center rounded-lg p-5'>
                <img
                  src="https://ghchart.rshah.org/22c55e/leoporto166"
                  alt="GitHub Contributions"
                  className="w-[600px]"
                />
              </div>
            </div>

          </div>

          <div className='linha'></div>

          <section>
            
              <div className='p-2'>
                <h2 className='text-green-400 text-3xl font-extrabold mb-2 text-shadow-lg text-shadow-white/10 '>Contate-me</h2>

                <div className='text-white flex gap-2 font-medium text-lg'>
                  <p>Gmail:</p>
                  <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCHrhTcLKJwtflKKQqTQjjSBXtfBHXbjhqWFcCPKDVkRkMNDzXGhqHPlVhwGsgbgWcmfQkTL'  target='_blank' className='text-white  cursor-pointer hover:text-green-600 transition-all duration-300 select-all'>leonardo.porto166@gmail.com</a>
                </div>

                <div className='text-white flex gap-2 font-medium text-lg'>
                  <p>Github:</p>
                  <a href='https://github.com/leoporto166'  target='_blank' className='text-white cursor-pointer hover:text-green-600 transition-all duration-300'>https://github.com/leoporto166</a>
                </div>


              </div>

          </section>


        </section>
      </main>
    </>
  ) : (
  <div>
    <>

      <header className='h-15 bg-green-200'>

        <div className='text-black flex items-center w-full h-15 gap-2 p-2 justify-between font-bold text-lg'>
          <a className='cursor-pointer' href='#Resumo'>Resumo</a>
          <a className='cursor-pointer' href='#Projetos'>Projetos</a>
          <a className='cursor-pointer' href='#Tec'>Tecnologias</a>
          
          <div className='flex gap-2'>
            <div className='flex flex-col items-center'>
              <button onClick={() => {setLingua(true)}} className='cursor-pointer'>Português</button>
              <div className={lingua ? "bg-green-600 rounded-full w-1 h-1" : "text-black"}></div>
            </div>
            <div className='flex flex-col items-center'>
              <button onClick={() => {setLingua(false)}}className='cursor-pointer'>Inglês</button>
              <div className={lingua ? "" : "bg-green-600 rounded-full w-1 h-1"}></div>
            </div>
          </div>

          {modo ? (
            <div className='border border-green-300 w-15 rounded-2xl'>
            <button className='bg-green-800 w-6 rounded-full text-green-800 cursor-pointer' onClick={() => {setModo(false)}}>a</button>
          </div>
          ) : (
            <div className='border border-green-600 w-15 rounded-2xl text-[15px]'>
            <div className='flex justify-end'><button className='bg-white w-6 rounded-full text-white cursor-pointer' onClick={() => {setModo(true)}}>a</button></div>
            </div>
          )
          
          }
          

        </div>

      </header>
      <div className='bg-green-600 w-full h-[1px] shadow-lg shadow-white/8'></div>
      <main className='BodyBranco select-none'>
        <section className=''>

        </section>

        <section className='flex justify-between p-2'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-black text-5xl font-extrabold'>Olá, eu sou o <br /> <p className='text-green-700 text-shadow-lg text-shadow-green-900/15 mb-4 '>Leonardo Porto</p></h1>


            <div className='flex items-center gap-2'>
              <a href={curriculo}
              download
              className='text-white bg-green-700 p-2 rounded-2xl hover:bg-black transition-all duration-600 w-23 text-center font-medium'
              >
                Baixar CV
              </a>

              <a href="https://github.com/leoporto166" target='_blank'>
                <FaGithub className='text-green-700 hover:text-black transition-all duration-600 cursor-pointer' size={25}></FaGithub>
              </a>
              <a href="https://www.linkedin.com/in/leonardo-porto-63a087382/" target='_blank'>
                <FaLinkedin className=' text-green-700 hover:text-black transition-all duration-600 cursor-pointer' size={25}></FaLinkedin>
              </a>
            </div>

          </div>

          <div>
            <img src={foto} className='h-50 rounded-full hover:mb-10 transition-all duration-500 hover:shadow-xl shadow-green-900/50 border-2 border-green-900'></img>
          </div>
        </section>

        <div className='linhaBranco'></div>

        <section id='Resumo'>

          <div className='p-2 flex flex-col '>
            <h2 className='text-green-500 text-3xl font-extrabold text-shadow-lg text-shadow-white/10 '>Resumo Pessoal</h2>

            <p className='text-black'>
              Sou estudante de Engenharia de Software, com formação complementar em Redes de Computadores e Assistente em Inteligência Artificial, em constante desenvolvimento na área de tecnologia. Tenho interesse em desenvolvimento de software, infraestrutura e soluções que unam programação, automação e boas práticas de TI.
              <br />
              <br />
              Possuo conhecimentos em JavaScript, TypeScript, React, fundamentos de redes, lógica de programação e noções de Git e GitHub, sempre buscando evoluir por meio de estudos práticos, projetos pessoais e cursos de aperfeiçoamento. Sou uma pessoa curiosa, organizada e colaborativa, com facilidade para aprender novas tecnologias e trabalhar em equipe.
              <br />
              <br />
              Busco oportunidades que me permitam aplicar meus conhecimentos, crescer profissionalmente e contribuir com soluções eficientes e inovadoras.
            </p>
          </div>  

          <div className='linhaBranco'></div>  

        </section>

        <section id='Projetos'>

          <div className='p-2'>
            <h2 className='text-green-500 text-3xl font-extrabold mb-2 text-shadow-lg text-shadow-white/10 '>Meus Projetos</h2>
          </div>

          <section className='flex p-2 '>

            <div className='border-2 border-green-800 rounded-lg w-110 h-90 mr-2 flex flex-col items-center shadow-lg shadow-black/8 bg-white hover:mt-[-12px] hover:mb-4 transition-all duration-300'>

              <div className='w-[360px] flex my-2'>

                <h1 className='text-black text-2xl font-bold'>Projeto Goias Esporte Clube</h1>

              </div>
              <a href="https://leoporto166.github.io/Projeto_Goias/" target='_blank'><img src={siteGec} alt="Imagem site Goias" className='w-90 h-55 mt-2 border border-black' /></a>

              <div className='w-[360px] flex mt-2 items-center gap-2'>
                <button
                onClick={() => setOpen(true)}
                >
                <p className='text-white bg-green-600 p-2 rounded-2xl hover:bg-black transition-all duration-600 text-center font-medium cursor-pointer'>Abrir previa</p>
                </button>

                <a href="https://github.com/leoporto166/Projeto_Goias/tree/main/goias-app" target='_blank' className=''>
                  <FaGithub size={25} className='text-green-500 hover:text-black transition-all duration-600 cursor-pointer'></FaGithub>
                </a>
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

        <div className='linhaBranco'></div>


        <section id='Tec'>

          <div className='p-2'>
            <h2 className='text-green-500 text-3xl font-extrabold text-shadow-lg text-shadow-white/10 '>Stack Tecnológico</h2>
          

            <div className='flex '>
              <div className='gap-5 mt-5 flex flex-wrap'>
                {
                  tecnologias.map((tech, index) => (
                    <div
                    key={index}
                    className='flex items-center hover:text-white hover:mb-5 transition-all duration-300'
                    >

                      <span className='text-white bg-black p-2 rounded-2xl hover:bg-green-100 hover:text-black transition-all duration-600 font-medium w-35 flex justify-between'>{tech.nome} <span className=''>{tech.icon}</span></span>

                    </div>
                  ))
                }
              </div>
            </div>

            <div className='flex items-center flex-col mt-5'>

              <div className='w-full max-w-[1000px] flex'>
                <h3 className='text-black font-bold text-xl mb-2'>Historico GitHub - 2025</h3>
              </div>

              <div className='border border-green-900 w-full max-w-[1000px] flex justify-center rounded-lg p-5 bg-black'>
                <img
                  src="https://ghchart.rshah.org/22c55e/leoporto166"
                  alt="GitHub Contributions"
                  className="w-[600px]"
                />
              </div>
            </div>

          </div>

          <div className='linhaBranco'></div>

          <section>
            
              <div className='p-2'>
                <h2 className='text-green-500 text-3xl font-extrabold mb-2 text-shadow-lg text-shadow-white/10 '>Contate-me</h2>

                <div className='text-black flex gap-2 font-medium text-lg'>
                  <p>Gmail:</p>
                  <a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCHrhTcLKJwtflKKQqTQjjSBXtfBHXbjhqWFcCPKDVkRkMNDzXGhqHPlVhwGsgbgWcmfQkTL'  target='_blank' className='  cursor-pointer hover:text-green-900 transition-all duration-300 select-all'>leonardo.porto166@gmail.com</a>
                </div>

                <div className='text-black flex gap-2 font-medium text-lg'>
                  <p>Github:</p>
                  <a href='https://github.com/leoporto166'  target='_blank' className=' cursor-pointer hover:text-green-600 transition-all duration-300'>https://github.com/leoporto166</a>
                </div>


              </div>

          </section>


        </section>
      </main>
    </>
  </div>)}
  </>
  ) : (
  <>
  { modo ? (
    <>

  <header className='h-15 bg-black'>

    <div className='text-white flex items-center w-full h-15 gap-2 p-2 justify-between font-bold text-lg'>
      <a className='cursor-pointer' href='#Resumo'>Summary</a>
      <a className='cursor-pointer' href='#Projetos'>Projects</a>
      <a className='cursor-pointer' href='#Tec'>Technologies</a>

      <div className='flex gap-2'>
        <div className='flex flex-col items-center'>
          <button onClick={() => {setLingua(true)}} className='cursor-pointer'>Portuguese</button>
          <div className={lingua ? "bg-green-600 rounded-full w-1 h-1" : "text-black"}></div>
        </div>
        <div className='flex flex-col items-center'>
          <button onClick={() => {setLingua(false)}}className='cursor-pointer'>English</button>
          <div className={lingua ? "" : "bg-green-600 rounded-full w-1 h-1"}></div>
        </div>
      </div>

      {modo ? (
        <div className='border border-green-300 w-15 rounded-2xl text-[15px]'>
        <button className='bg-green-800 w-6 rounded-full text-green-800 cursor-pointer' onClick={() => {setModo(false)}}>a</button>
      </div>
      ) : (
        <div className='border border-green-300 w-15 rounded-2xl'>
        <div className='flex justify-end'><button className='bg-white w-6 rounded-full text-white cursor-pointer' onClick={() => {setModo(true)}}>a</button></div>
        </div>
      )}
    </div>

  </header>

  <div className='bg-green-600 w-full h-[1px] shadow-lg shadow-white/8'></div>

  <main className='Body select-none'>

    <section className='flex justify-between p-2'>
      <div className='flex flex-col justify-center'>
        <h1 className='text-white text-5xl font-extrabold'>
          Hi, I am <br />
          <p className='text-green-400 text-shadow-lg text-shadow-white/10 mb-4'>Leonardo Porto</p>
        </h1>

        <div className='flex items-center gap-2'>
          <a
            href={curriculo}
            download
            className='text-black bg-green-600 p-2 rounded-2xl hover:bg-white transition-all duration-600 w-23 text-center font-medium'
          >
            Install CV
          </a>

          <a href="https://github.com/leoporto166" target='_blank'>
            <FaGithub className='text-green-500 hover:text-white transition-all duration-600 cursor-pointer' size={25} />
          </a>

          <a href="https://www.linkedin.com/in/leonardo-porto-63a087382/" target='_blank'>
            <FaLinkedin className=' text-green-500 hover:text-white transition-all duration-600 cursor-pointer' size={25} />
          </a>
        </div>
      </div>

      <div>
        <img src={foto} className='h-50 rounded-full hover:mb-10 transition-all duration-500 hover:shadow-xl shadow-green-300/10 border-2 border-green-600' />
      </div>
    </section>

    <div className='linha'></div>

    <section id='Resumo'>
      <div className='p-2 flex flex-col'>
        <h2 className='text-green-400 text-3xl font-extrabold text-shadow-lg text-shadow-white/10'>
          Personal Summary
        </h2>

        <p className='text-white'>
          I am a Software Engineering student, with complementary education in Computer Networks and Artificial Intelligence Assistant, constantly developing in the technology field.
          I am interested in software development, infrastructure, and solutions that combine programming, automation, and IT best practices.
          <br /><br />
          I have knowledge in JavaScript, TypeScript, React, network fundamentals, programming logic, and basic Git and GitHub usage, always seeking to evolve through hands-on studies, personal projects, and professional courses.
          I am a curious, organized, and collaborative person, with ease in learning new technologies and working in teams.
          <br /><br />
          I am looking for opportunities that allow me to apply my knowledge, grow professionally, and contribute with efficient and innovative solutions.
        </p>
      </div>

      <div className='linha'></div>
    </section>

    <section id='Projetos'>
      <div className='p-2'>
        <h2 className='text-green-400 text-3xl font-extrabold mb-2 text-shadow-lg text-shadow-white/10'>
          My Projects
        </h2>
      </div>

      <section className='flex p-2'>
        <div className='border-2 border-green-800 rounded-lg w-110 h-90 mr-2 flex flex-col items-center shadow-lg shadow-white/8 bg-black hover:mt-[-12px] hover:mb-4 transition-all duration-300'>
          <div className='w-[360px] flex my-2'>
            <h1 className='text-white text-2xl font-bold'>Goiás Esporte Clube Project</h1>
          </div>

          <a href="https://leoporto166.github.io/Projeto_Goias/" target='_blank'>
            <img src={siteGec} alt="Goiás website preview" className='w-90 h-55 mt-2 border border-white' />
          </a>

          <div className='w-[360px] flex mt-2 items-center gap-2'>
            <button onClick={() => setOpen(true)}>
              <p className='text-black bg-green-600 p-2 rounded-2xl hover:bg-white transition-all duration-600 text-center font-medium cursor-pointer'>
                Open Preview
              </p>
            </button>

            <a href="https://github.com/leoporto166/Projeto_Goias/tree/main/goias-app" target='_blank'>
              <FaGithub size={25} className='text-green-500 hover:text-white transition-all duration-600 cursor-pointer' />
            </a>
          </div>
        </div>
      </section>

     {open && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg w-200 shadow-lg h-200 justify-center items-center flex flex-col">
      <div className='w-full justify-end flex mb-2'>
        <button onClick={() => setOpen(false)}>
          <FiX size={25} className='cursor-pointer'></FiX>
        </button>
      </div>

      <video
        className='w-130 mb-2'
        autoPlay
        loop
        muted
        controls={false}
      >
        <source src={videoGO} type='video/mp4' />
        Your browser does not support the video.
      </video>

      <p>
        Development of a modern and responsive institutional website, using React as the main framework. The project features a custom layout, visual identity aligned with the club, and a strong focus on user experience.

        <br />
        <br />

        Responsive menus were implemented, along with dynamic news and match carousels using Swiper, in addition to the organization of reusable components. The project also uses Tailwind CSS for efficient and consistent styling, ensuring good performance and adaptation to different screen sizes.

        <br />
        <br />

        In addition, the system includes user authentication, including login and password, access control, and route protection, ensuring that certain areas of the application are accessible only to authenticated users.

        <br />
        <br />

        The goal was to simulate a professional sports portal, highlighting relevant content such as news, matches, and club information, applying front-end development best practices, code organization, and basic application security concepts.
      </p>
    </div>
  </div>
)}

    </section>

    <div className='linha'></div>

    <section id='Tec'>
      <div className='p-2'>
        <h2 className='text-green-400 text-3xl font-extrabold text-shadow-lg text-shadow-white/10'>
          Tech Stack
        </h2>
      </div>

       <div className='flex '>
              <div className='gap-5 mt-5 flex flex-wrap'>
                {
                  tecnologias.map((tech, index) => (
                    <div
                    key={index}
                    className='flex items-center hover:text-white hover:mb-5 transition-all duration-300'
                    >

                      <span className='text-black bg-white p-2 rounded-2xl hover:bg-black hover:text-white transition-all duration-600 font-medium w-35 flex justify-between'>{tech.nome} <span className=''>{tech.icon}</span></span>

                    </div>
                  ))
                }
              </div>
            </div>

            <div className='flex items-center flex-col mt-5'>

              <div className='w-full max-w-[1000px] flex'>
                <h3 className='text-white font-bold text-xl mb-2'>GitHub History - 2025</h3>
              </div>

              <div className='border border-green-200 w-full max-w-[1000px] flex justify-center rounded-lg p-5'>
                <img
                  src="https://ghchart.rshah.org/22c55e/leoporto166"
                  alt="GitHub Contributions"
                  className="w-[600px]"
                />
              </div>
            </div>

    </section>

    <div className='linha'></div>

    <section>
      <div className='p-2'>
        <h2 className='text-green-400 text-3xl font-extrabold mb-2 text-shadow-lg text-shadow-white/10'>
          Contact Me
        </h2>

        <div className='text-white flex gap-2 font-medium text-lg'>
          <p>Email:</p>
          <a
            href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCHrhTcLKJwtflKKQqTQjjSBXtfBHXbjhqWFcCPKDVkRkMNDzXGhqHPlVhwGsgbgWcmfQkTL'
            target='_blank'
            className='text-white cursor-pointer hover:text-green-600 transition-all duration-300 select-all'
          >
            leonardo.porto166@gmail.com
          </a>
        </div>

        <div className='text-white flex gap-2 font-medium text-lg'>
          <p>GitHub:</p>
          <a
            href='https://github.com/leoporto166'
            target='_blank'
            className='text-white cursor-pointer hover:text-green-600 transition-all duration-300'
          >
            https://github.com/leoporto166
          </a>
        </div>
      </div>
    </section>

  </main>
    </>
  ) : (
<>

  <header className='h-15 bg-green-200'>

    <div className='text-black flex items-center w-full h-15 gap-2 p-2 justify-between font-bold text-lg'>
      <a className='cursor-pointer' href='#Resumo'>Summary</a>
      <a className='cursor-pointer' href='#Projetos'>Projects</a>
      <a className='cursor-pointer' href='#Tec'>Technologies</a>
      
      <div className='flex gap-2'>
        <div className='flex flex-col items-center'>
          <button onClick={() => {setLingua(true)}} className='cursor-pointer'>Portuguese</button>
          <div className={lingua ? "bg-green-600 rounded-full w-1 h-1" : "text-black"}></div>
        </div>
        <div className='flex flex-col items-center'>
          <button onClick={() => {setLingua(false)}} className='cursor-pointer'>English</button>
          <div className={lingua ? "" : "bg-green-600 rounded-full w-1 h-1"}></div>
        </div>
      </div>

      {modo ? (
        <div className='border border-green-300 w-15 rounded-2xl'>
          <button className='bg-green-800 w-6 rounded-full text-green-800 cursor-pointer' onClick={() => {setModo(false)}}>a</button>
        </div>
      ) : (
        <div className='border border-green-600 w-15 rounded-2xl text-[15px]'>
          <div className='flex justify-end'>
            <button className='bg-white w-6 rounded-full text-white cursor-pointer' onClick={() => {setModo(true)}}>a</button>
          </div>
        </div>
      )}
    </div>

  </header>

  <div className='bg-green-600 w-full h-[1px] shadow-lg shadow-white/8'></div>

  <main className='BodyBranco select-none'>

    <section className=''></section>

    <section className='flex justify-between p-2'>
      <div className='flex flex-col justify-center'>
        <h1 className='text-black text-5xl font-extrabold'>
          Hi, I am <br />
          <p className='text-green-700 text-shadow-lg text-shadow-green-900/15 mb-4'>Leonardo Porto</p>
        </h1>

        <div className='flex items-center gap-2'>
          <a
            href={curriculo}
            download
            className='text-white bg-green-700 p-2 rounded-2xl hover:bg-black transition-all duration-600 w-23 text-center font-medium'
          >
            Install CV
          </a>

          <a href="https://github.com/leoporto166" target='_blank'>
            <FaGithub className='text-green-700 hover:text-black transition-all duration-600 cursor-pointer' size={25} />
          </a>

          <a href="https://www.linkedin.com/in/leonardo-porto-63a087382/" target='_blank'>
            <FaLinkedin className='text-green-700 hover:text-black transition-all duration-600 cursor-pointer' size={25} />
          </a>
        </div>
      </div>

      <div>
        <img src={foto} className='h-50 rounded-full hover:mb-10 transition-all duration-500 hover:shadow-xl shadow-green-900/50 border-2 border-green-900' />
      </div>
    </section>

    <div className='linhaBranco'></div>

    <section id='Resumo'>
      <div className='p-2 flex flex-col'>
        <h2 className='text-green-500 text-3xl font-extrabold text-shadow-lg text-shadow-white/10'>Personal Summary</h2>

        <p className='text-black'>
          I am a Software Engineering student, with complementary training in Computer Networks and Artificial Intelligence Assistant, constantly developing in the technology field. I am interested in software development, infrastructure, and solutions that combine programming, automation, and IT best practices.
          <br /><br />
          I have knowledge of JavaScript, TypeScript, React, networking fundamentals, programming logic, and Git/GitHub basics, always seeking to improve through practical studies, personal projects, and professional development courses. I am a curious, organized, and collaborative person, with ease in learning new technologies and working in teams.
          <br /><br />
          I am seeking opportunities that allow me to apply my knowledge, grow professionally, and contribute with efficient and innovative solutions.
        </p>
      </div>

      <div className='linhaBranco'></div>
    </section>

    <section id='Projetos'>
      <div className='p-2'>
        <h2 className='text-green-500 text-3xl font-extrabold mb-2 text-shadow-lg text-shadow-white/10'>My Projects</h2>
      </div>

      <section className='flex p-2'>
        <div className='border-2 border-green-800 rounded-lg w-110 h-90 mr-2 flex flex-col items-center shadow-lg shadow-black/8 bg-white hover:mt-[-12px] hover:mb-4 transition-all duration-300'>
          <div className='w-[360px] flex my-2'>
            <h1 className='text-black text-2xl font-bold'>Goiás Esporte Clube Project</h1>
          </div>

          <a href="https://leoporto166.github.io/Projeto_Goias/" target='_blank'>
            <img src={siteGec} alt="Goiás website image" className='w-90 h-55 mt-2 border border-black' />
          </a>

          <div className='w-[360px] flex mt-2 items-center gap-2'>
            <button onClick={() => setOpen(true)}>
              <p className='text-white bg-green-600 p-2 rounded-2xl hover:bg-black transition-all duration-600 text-center font-medium cursor-pointer'>
                Open Preview
              </p>
            </button>

            <a href="https://github.com/leoporto166/Projeto_Goias/tree/main/goias-app" target='_blank'>
              <FaGithub size={25} className='text-green-500 hover:text-black transition-all duration-600 cursor-pointer' />
            </a>
          </div>

          {open && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg w-200 shadow-lg h-200 justify-center items-center flex flex-col">
                <div className='w-full justify-end flex mb-2'>
                  <button onClick={() => setOpen(false)}>
                    <FiX size={25} className='cursor-pointer' />
                  </button>
                </div>

                <video className='w-130 mb-2' autoPlay loop muted controls={false}>
                  <source src={videoGO} type='video/mp4' />
                  Your browser does not support the video.
                </video>

                <p>
                  Development of a modern and responsive institutional website using React as the main framework. The project features a custom layout, visual identity aligned with the club, and a strong focus on user experience.
                  <br /><br />
                  Responsive menus were implemented, along with dynamic news and match carousels using Swiper, as well as reusable component organization. Tailwind CSS was used for efficient and consistent styling, ensuring performance and responsiveness.
                  <br /><br />
                  The system also includes user authentication, login and password handling, access control, and route protection.
                  <br /><br />
                  The goal was to simulate a professional sports portal, highlighting relevant content and applying front-end best practices, code organization, and basic security concepts.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </section>

    <div className='linhaBranco'></div>

    <section id='Tec'>
      <div className='p-2'>
        <h2 className='text-green-500 text-3xl font-extrabold text-shadow-lg text-shadow-white/10'>Technology Stack</h2>

        <div className='flex'>
          <div className='gap-5 mt-5 flex flex-wrap'>
            {tecnologias.map((tech, index) => (
              <div key={index} className='flex items-center hover:text-white hover:mb-5 transition-all duration-300'>
                <span className='text-white bg-black p-2 rounded-2xl hover:bg-green-100 hover:text-black transition-all duration-600 font-medium w-35 flex justify-between'>
                  {tech.nome} <span>{tech.icon}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className='flex items-center flex-col mt-5'>
          <div className='w-full max-w-[1000px] flex'>
            <h3 className='text-black font-bold text-xl mb-2'>GitHub History - 2025</h3>
          </div>

          <div className='border border-green-900 w-full max-w-[1000px] flex justify-center rounded-lg p-5 bg-black'>
            <img
              src="https://ghchart.rshah.org/22c55e/leoporto166"
              alt="GitHub Contributions"
              className="w-[600px]"
            />
          </div>
        </div>
      </div>

      <div className='linhaBranco'></div>

      <section>
        <div className='p-2'>
          <h2 className='text-green-500 text-3xl font-extrabold mb-2 text-shadow-lg text-shadow-white/10'>Contact Me</h2>

          <div className='text-black flex gap-2 font-medium text-lg'>
            <p>Email:</p>
            <a
              href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCHrhTcLKJwtflKKQqTQjjSBXtfBHXbjhqWFcCPKDVkRkMNDzXGhqHPlVhwGsgbgWcmfQkTL'
              target='_blank'
              className='cursor-pointer hover:text-green-900 transition-all duration-300 select-all'
            >
              leonardo.porto166@gmail.com
            </a>
          </div>

          <div className='text-black flex gap-2 font-medium text-lg'>
            <p>GitHub:</p>
            <a
              href='https://github.com/leoporto166'
              target='_blank'
              className='cursor-pointer hover:text-green-600 transition-all duration-300'
            >
              https://github.com/leoporto166
            </a>
          </div>
        </div>
      </section>
    </section>
  </main>
</>
  )}
  </>)}
</>
  )
}

export default App
