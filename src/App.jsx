import { useState } from "react";
import logo from "./assets/logo.jpg"
import prod1 from "./assets/img1.jpg";
import prod2 from "./assets/img2.jpg";
import prod3 from "./assets/img3.jpg";
import prod4 from "./assets/img4.jpg";
import { MdAddShoppingCart } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState([]);

  // TODO CARDAPIO DINAMICO
  const produtos = [
    { id: 1, nome: "Ferreiro Rocher", preco: 50, img: prod1 },
    { id: 2, nome: "Brigadeiro com Nutella", preco: 50, img: prod2 },
    { id: 3, nome: "Surpresa de Uva", preco: 45, img: prod3 },
    { id: 4, nome: "Leite Ninho com Nutella", preco: 50, img: prod4 },
  ];

  const addToCart = (item) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItem = (item) => {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);
      if (existingItem.quantity > 1) {
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        return prev.filter((cartItem) => cartItem.id !== item.id);
      }
    });
  };

  const total = cart
    .reduce((sum, item) => sum + item.preco * item.quantity, 0)
    .toFixed(2);

  const finalizarPedido = () => {
    if (cart.length === 0) {
      toast.error("Seu carrinho está vazio!",{
        theme: "colored",
      });
      return;
    }

    toast.success("Pedido finalizado",{
      theme: "colored",
    });

    setCart([]);
    setIsModalOpen(false);
  };

  return (
    <>
      <ToastContainer />
      <header className="w-full h-[420px] bg-zinc-900 bg-[url('./assets/bg.png')] bg-cover bg-center">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-32 h-32 rounded-full shadow-lg hover:scale-110 duration-200"
          />
          <h1 className="text-4xl mt-4 mb-2 font-bold text-white">O menino dos doces</h1>
          <span className="text-white font-medium">Fortaleza - CE</span>
          <div className="bg-green-500 px-4 py-1 rounded-lg mt-5">
            <span className="text-white font-medium">
              Faça sua encomenda
            </span>
          </div>
        </div>
      </header>

      <h2 className="text-2xl font-bold text-center mt-9 mb-6">
        Conheça nosso menu
      </h2>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-auto max-w-7xl px-2 mb-15">
        {produtos.map((p) => (
          <div key={p.id} className="flex gap-2 mt-3">
            <img
              src={p.img}
              alt={p.nome}
              className="w-28 h-28 rounded-md hover:scale-110 duration-200"
            />
            <div>
              <p className="font-bold">{p.nome}</p>
              <p className="text-sm">Tamanho do Ovo: 350g.</p>
              <p className="text-sm">Peso Total: 550g.</p>
              <div className="flex justify-between items-center mt-3">
                <p className="font-bold text-lg">
                  R${p.preco.toFixed(2).replace(".", ",")}
                </p>
                <button
                  onClick={() => addToCart(p)}
                  className="bg-gray-900 px-2 rounded"
                >
                  <MdAddShoppingCart className="text-lg text-white cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      {isModalOpen && (
        <div className="bg-black/60 w-full h-full fixed top-0 left-0 z-[99] flex items-center justify-center">
          <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[60%]">
            <h2 className="text-center font-bold text-2xl mb-4">Meu carrinho</h2>

            <div className="flex flex-col gap-2 mb-4">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500">Carrinho vazio</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <p className="font-bold">
                        {item.nome} ({item.quantity})
                      </p>
                      <p>
                        R$
                        {(item.preco * item.quantity)
                          .toFixed(2)
                          .replace(".", ",")}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item)}
                      className="text-red-500 cursor-pointer"
                    >
                      Remover
                    </button>
                  </div>
                ))
              )}
            </div>

            <p className="font-bold">Total: R${total.replace(".", ",")}</p>

            <div className="flex items-center justify-between mt-4 w-full">
              <button
                className="cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              >
                Fechar
              </button>
              <button
                onClick={finalizarPedido}
                className="bg-green-500 text-white px-4 py-1 rounded cursor-pointer"
              >
                Finalizar
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="w-full flex items-center justify-center bg-red-500 py-2 fixed bottom-0 z-40">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1 text-white font-bold cursor-pointer"
        >
          ({cart.length}) Ver meu pedido
          <MdAddShoppingCart className="text-lg text-white cursor-pointer" />
        </button>
      </footer>
    </>
  );
}

export default App;
