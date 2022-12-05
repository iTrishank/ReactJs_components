import React from "react";
import { Contenedor, Tarjeta } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import fondo from "../img/hero-bg.jpg"
import { ArrowRight } from "tabler-icons-react";

const Home = () => {

  const { currentColor, hoverColor } = useStateContext();
  return (
    <>
      <div className="hero-container">
        <section className="h-screen w-full flex flex-col justify-center items-center scroll" style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover", backgroundPosition: "center" }} >
          <h1 className="text-gray-200 text-6xl font-semibold">Welcome!</h1>
          <p className="mt-12 sm:mt-5 text-gray-400 px-48">This website has a generic structure and change of color palates and nide mode is allowed</p>
          <button className={`flex justify-middle rounded-sm p-2 mt-5 sm:mt-10 ${currentColor} ${hoverColor}`} >
            <p className="text-white mr-5 self-center">Information</p>
            <ArrowRight color="white" className="self-center" />
          </button>
          <div id="enlaces" className="mt-5 flex justify-between align-middle w-1/2">
            <a href="#componentes" className="text-white p-1  w-32 text-center rounded-sm bg-gray-600 hover:bg-gray-300 hover:text-black ">Componentes</a>
            <a href="#contenedor" className="text-white p-1  w-32 text-center rounded-sm bg-gray-600 hover:bg-gray-300 hover:text-black ">Container</a>
            <a href="#tarjetas" className="text-white p-1  w-32 text-center rounded-sm bg-gray-600 hover:bg-gray-300 hover:text-black ">Card</a>
          </div>
        </section>
      </div>


      <Contenedor
        id="componentes"
        titulo="Componentes"
        altura=" flex flex-col"
        fondo="bg-white dark:bg-main-dark-bg"

      >
        <h3 className="dark:text-gray-200 text-black mb-2 sm:mb-10 ">
        test start page, where the own components are listed.
        </h3>

        <div className="flex">

          <Tarjeta
            titulo="Container"
            altura="40"
            fondo="bg-white"
            elevacion="2xl"
          >
            <h3 className="text-black dark:text-gray-200">Component used to wrap main elements of a page</h3>
            <button className={`${currentColor} ${hoverColor} rounded-sm p-1 text-white w-1/2`}
            >
              more information...
            </button>

          </Tarjeta>
          <Tarjeta
            titulo="Card"
            altura="40"
          fondo="bg-white"
            elevacion="md"
          >
            <h3 className="text-black dark:text-gray-200">Component to display elements</h3>
            <button className={`${currentColor} ${hoverColor} rounded-sm p-1 text-white w-1/2`}
            >
              more information...
            </button>

          </Tarjeta>

        </div>

      </Contenedor>
      <Contenedor
        titulo="Container"
        id="contenedor"
        altura=" flex items-center justify-center flex-col"
        fondo="bg-main-bg dark:bg-main-dark-bg"
      >
        <h3 className="dark:text-gray-200 text-black mb-2 sm:mb-10">
        Test start page, where the own components are listed.
        </h3>


      </Contenedor>
      <Contenedor
        titulo="Card"
        id="tarjetas"
        altura=" flex items-center justify-center flex-col"
        fondo="bg-main-bg dark:bg-main-dark-bg"

      >
        <h3 className="dark:text-gray-200 text-black mb-2 sm:mb-10">
        Test start page, where the own components are listed.
        </h3>


      </Contenedor>
    </>
  );
};

export default Home;
