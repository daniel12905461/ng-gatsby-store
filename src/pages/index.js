import React, { useContext } from "react"
import { InitContext, InitProvider } from "../context/InitProvider";
import Navbar from "../shared/Navbar";
import H1Custom from "../ui/H1Custom";
import H2Custom from "../ui/H2Custom";
import PCustom from "../ui/PCustom";

export default function Home() {


  return (
    <>
      <InitProvider>
        <header className="p-2">
          <div className="container flex flex-col md:flex-row flex-wrap items-center justify-between mx-auto">
            
            <Navbar></Navbar>
          </div>
        </header>

        <main className="container m-auto px-3 md:px-20">
          <header className="my-6">
            <H1Custom>Daniel Delgado Camacho</H1Custom>
          </header>
          <PCustom>
            Las barbacoas o bbq son más que un utensilio de cocina,
            <strong>
              las barbacoas son reuniones con amigos, familiares y sonrisas de tardes soleadas, una buena comida y cervezas al sol.
            </strong>
            Si eres amante del mundo de las barbacoas, esta es tu web.
          </PCustom>
          <PCustom>
            Te mostraremos todos los trucos, modelos y recetas para que tu barbacoa sea la guinda de un día perfecto.
          </PCustom>
          <H2Custom>Análisis de las mejores barbacoas de 2022:</H2Custom>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
            <article className='relative'>
              <a href="">
                <img
                  loading='lazy'
                  className='h-full w-full rounded-2xl object-cover'
                  src={
                    './curriculum-vitae.png'
                  }
                  alt='barbacoa tepro toronto'
                />
                <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col content-center justify-center rounded-2xl font-bold text-white hover:bg-[#0000005e]'>
                  <h3 className='h-auto' style={{ textShadow: '0 0 10px black' }}>
                    Tepro Toronto Click 2020: la mejor Barbacoa de carbón calidad-precio
                  </h3>
                </div>
              </a>
            </article>
            <article className='relative'>
              <a href="">
                <img
                  loading='lazy'
                  className='h-full w-full rounded-2xl object-cover'
                  src={
                    'https://m.media-amazon.com/images/I/416YDR+aEML._SL160_.jpg'
                  }
                  alt='barbacoa tepro toronto'
                />
                <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col content-center justify-center rounded-2xl font-bold text-white hover:bg-[#0000005e]'>
                  <h3 className='h-auto' style={{ textShadow: '0 0 10px black' }}>
                    Tepro Toronto Click 2020: la mejor Barbacoa de carbón calidad-precio
                  </h3>
                </div>
              </a>
            </article>
            <article className='relative'>
              <a href="">
                <img
                  loading='lazy'
                  className='h-full w-full rounded-2xl object-cover'
                  src={
                    'https://m.media-amazon.com/images/I/416YDR+aEML._SL160_.jpg'
                  }
                  alt='barbacoa tepro toronto'
                />
                <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col content-center justify-center rounded-2xl font-bold text-white hover:bg-[#0000005e]'>
                  <h3 className='h-auto' style={{ textShadow: '0 0 10px black' }}>
                    Tepro Toronto Click 2020: la mejor Barbacoa de carbón calidad-precio
                  </h3>
                </div>
              </a>
            </article>
          </div>
          <H2Custom>Catálogo de barbacoas al mejor precio:</H2Custom>
          <div className="grid grid-cols-3 gap-2">
            <div className='border-solid border-[1px] border-gray-300 h-auto flex flex-col items-center justify-between p-2'>
              <a href="https://www.amazon.es/dp/B09TWSPCPX?tag=barbacoas0f-21&linkCode=osi&th=1&psc=1&keywords=barbacoas%20de%20carbon">
                <img
                  loading='lazy'
                  className='h-72 object-cover'
                  src={
                    'https://m.media-amazon.com/images/I/416YDR+aEML._SL160_.jpg'
                  }
                  alt='barbacoa tepro toronto'
                />
              </a>
              <a
                className="text-cyan-700 font-semibold"
                href="https://www.amazon.es/dp/B09TWSPCPX?tag=barbacoas0f-21&linkCode=osi&th=1&psc=1&keywords=barbacoas%20de%20carbon">
                Tarrington House Barbacoa Louisiana para...
              </a>
              <div className="flex flex-wrap items-center justify-between w-full">
                <span>79,98 EUR</span>
                <span>79,98 EUR</span>
              </div>
              <a
                className="bg-amber-600 w-full text-center rounded-lg font-semibold"
                href="https://www.amazon.es/dp/B09TWSPCPX?tag=barbacoas0f-21&linkCode=osi&th=1&psc=1&keywords=barbacoas%20de%20carbon"
              >
                Comprar en Amazon
              </a>
            </div>
          </div>
          <h2 className="text-3xl font-semibold my-4">Análisis de las mejores barbacoas de 2022:</h2>
          <p className="text-base mb-1">
            Hay infinidad de modelos así que es normal que no sepas qué barbacoa comprar que responda mejor a tus necesidades. En Barbacoas.online las hemos clasificado para que encuentres lo que buscas.
          </p>
          <div className="grid grid-cols-3 gap-2">
            <article className='drop-shadow-2xl bg-white'>
              <header>
                <a href="">
                  <img
                    loading='lazy'
                    className='h-36 w-full rounded-2xl object-cover'
                    src={
                      'https://m.media-amazon.com/images/I/416YDR+aEML._SL160_.jpg'
                    }
                    alt='barbacoa tepro toronto'
                  />
                  <h3 className='p-2'>
                    Tepro Toronto Click 2020: la mejor Barbacoa de carbón calidad-precio
                  </h3>
                </a>
              </header>
            </article>
          </div>
          <h2 className="text-3xl font-semibold my-4">Análisis de las mejores barbacoas de 2022:</h2>
          <p className="text-base mb-1">
            Te mostramos las características y las mejores ofertas de barbacoas de las principales marcas del sector.
          </p>
        </main>
      </InitProvider>
    </>
  )
}
