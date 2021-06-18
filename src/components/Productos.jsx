import React, { useState } from "react";
import Buttons from "./Buttons";
import NavBar from "./navbar";
import Container from "@material-ui/core/Container";

const items = [
  {
    id: 1,
    name: "Galletas Toddys",
    price: 120,
    contador: 0,
  },
  {
    id: 2,
    name: "Coca Cola 1,5 Lts",
    price: 70,
    contador: 0,
  },
  {
    id: 3,
    name: "Alfajor Havanna",
    price: 100,
    contador: 0,
  },
  {
    id: 4,
    name: "Chocolate Aguila",
    price: 60,
    contador: 0,
  },
];

const Productos = () => {
  const [cart, setCart] = useState([]);
  const cartTotal = cart.reduce((total, { price = 0 }) => total + price, 0);

  const addToCart = (item) =>
    setCart((currentCart) => [...currentCart, item], (item.contador += 1));

  const counter = (items) => {
    let unico = 0; //para contar cada item unico y mandarlo al contador del nav
    for (let index = 0; index < items.length; index++) {
      if (items[index].contador > 0) {
        unico++;
      }
    }
    return unico++;
  };

  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
        (item.contador -= 1),
        counter(items),
      ];
    });
  };

  const listItemsToBuy = () =>
    items.map((item) => (
      <div key={item.id}>
        {`${item.name}: $${item.price}`}
        <Buttons
          add={() => addToCart(item)}
          remove={() => removeFromCart(item)}
          formatCount={item.contador ? item.contador : "cero"} //cont >1 pasar num sino 0 con ternario
          sub={item.price * item.contador}
        />
      </div>
    ));
  //mapeo cada item con su precio e incorporo el componente con los botones y su comportamiento

  const limpiar = () => {
    setCart([]); //seteo el carrito a 0
    for (let index = 0; index < items.length; index++) {
      //tengo que resetear el contador de cada item a 0
      items[index].contador = 0;
    }
  };

  return (
    <div>
      <NavBar total={cartTotal} totalCounters={counter(items)} />
      <Container maxWidth="xl">
        <h1 class="card-title">Tienda de Dulces</h1>
        <span className="subtitulo">Subtotal x Prod:</span>
        <div>{listItemsToBuy()}</div>
        <div>
          <button
            class="btn btn-outline-secondary mt-4"
            onClick={() => limpiar()}
          >
            Limpiar Carrito
          </button>
        </div>
      </Container>
    </div>
  );
}; //llamo al componente navbar para pasarle como props el total de los productos

export default Productos;
