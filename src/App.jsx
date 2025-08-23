import logo from './assets/logo.jpg'
import prod1 from './assets/img1.jpg'
import prod2 from './assets/img2.jpg'
import prod3 from './assets/img3.jpg'
import prod4 from './assets/img4.jpg'
import { MdAddShoppingCart } from "react-icons/md";

function App() {

  return (
    <>
      <header className='w-full h-[420px] bg-zinc-900 bg-[url(./assets/bg.png)] bg-cover bg-center'>
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <img src={logo} alt="Logo" className='w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200' />
          <h1 className='text-4xl mt-4 mb-2 font-bold text-white'>O menino dos doces</h1>
          <span className='text-white font-medium'>Fortaleza - CE</span>
          <div className='bg-green-500 px-4 py-1 rounded-lg mt-5' id='date-span'>
            <span className='text-white font-medium'>Faça sua encomenda</span>
          </div>
        </div>
      </header>

      <h2 className='text-2xl font-bold text-center mt-9 mb-6'> Conheça nosso menu </h2>
      <div id='menu'>
        <main className='grid grid-cols-1 md:grid-cols-2 gap 5 mx-auto max-w-7xl px-2 mb-15' >
          <div className='flex gap-2 mt-3'>
            <img src={prod1} alt="Ferreiro Rocher" className='w-28 h-28 rounded-md hover:scale-110 duration-200' />
            <div>
              <p className='font-bold'>Ferreiro Rocher</p>
              <div className='flex justify-between items-center'> <p className='font-bold text-lg'>R$50,00</p>
                <button className='bg-gray-900 px-2 rounded add-cart'> <MdAddShoppingCart className='text-lg text-white cursor-pointer' /> </button>
              </div>
            </div>
          </div>

          <div className='flex gap-2 mt-3'>
            <img src={prod2} alt="Surpresa de Uva" className='w-28 h-28 rounded-md hover:scale-110 duration-200' />
            <div>
              <p className='font-bold'>Surpresa de Uva</p>
              <div className='flex justify-between items-center'>
                <p className='font-bold text-lg'>R$45,00</p>
                <button data-price="45.00" className='bg-gray-900 px-2 rounded add-cart'> <MdAddShoppingCart className='text-lg text-white cursor-pointer' /> </button>
              </div>
            </div>
          </div>

          <div className='flex gap-2 mt-3'>
            <img src={prod3} alt="Brigadeiro com Nutella" className='w-28 h-28 rounded-md hover:scale-110 duration-200' />
            <div>
              <p className='font-bold'>Brigadeiro com Nutella</p>
              <div className='flex justify-between items-center'>
                <p className='font-bold text-lg'>R$50,00</p>
                <button data-price="50.00" className='bg-gray-900 px-2 rounded add-cart'> <MdAddShoppingCart className='text-lg text-white cursor-pointer' /> </button>
              </div>
            </div>
          </div>

          <div className='flex gap-2 mt-3'>
            <img src={prod4} alt="Hamburuger bacon" className='w-28 h-28 rounded-md hover:scale-110 duration-200' />
            <div>
              <p className='font-bold'>Leite Ninho com Nutella</p>
              <div className='flex justify-between items-center mt-3'>
                <p className='font-bold text-lg'>R$50,00</p>
                <button data-price="50.00" className='bg-gray-900 px-2 rounded add-cart'> <MdAddShoppingCart className='text-lg text-white cursor-pointer' /> </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className='w-full flex items-center justify-center bg-red-500 py-2 fixed bottom-0 z-40 '>
        <button className='flex items-center gap-1 text-white font-bold cursor-pointer' id='cart-btn'> (<span id='cart-count'>0</span>) Ver meu pedido <MdAddShoppingCart className='text-lg text-white cursor-pointer' /> </button>
      </footer> </>)

} export default App