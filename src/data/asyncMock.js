export const productos = [
    {
      id: 1,
      nombre: "Audífonos Gamer ULTRA",
      precio: 20000,
      categoria: "Audifonos",
      stock: 5,
      descripcion:
        "Los Mejores Audifonos Con Audio Envolvente Para Jugar Sin Problemas",
      img: "https://cdnx.jumpseller.com/tecnoboss_chile/image/12192653/audifonos-gamer-kotion-each-g9000-ps4-xbox-switch-weekend-D_NQ_NP_699301-MLC31213754350_062019-F.jpg?1604284026",
    },
    {
      id: 2,
      nombre: "Teclado Gamer ULTRA",
      precio: 40000,
      categoria: "Teclados",
      stock: 5,
      descripcion:
        "Teclado Ultra Pro Para Nunca Perder En Tus Partidas",
      img: "https://store.volans.cl/wp-content/uploads/2022/04/STK090.1120ml.png",
    },
    {
      id: 3,
      nombre: "Mouse Gamer ULTRA",
      precio: 35000,
      categoria: "Mouse",
      stock: 5,
      descripcion:
        " Mouse Que Se Ajusta A Tu Mano Y Permite Ganar Tus Partidas Con Un Click.",
      img: "https://centrale.cl/wp-content/uploads/Logitech-Mouse-Gamer-G203-Rgb-Lightsync-6-Botones-Programables-8.000-Dp_UFTAxaT-500x500.webp",
    },
    {
      id: 4,
      nombre: "Mousepad Gamer ULTRA",
      precio: 10000,
      categoria: "Mousepad",
      stock: 5,
      descripcion:
        "MpusePad De Microfibra Para Un Mejor Desplazamiento Del Ratón.",
      img: "https://falabella.scene7.com/is/image/Falabella/gsc_118080661_1956844_1?wid=800&hei=800&qlt=70",
    },
    {
      id: 5,
      nombre: "Tarjeta De Video Gamer ULTRA",
      precio: 200000,
      categoria: "TarjetaDeVideo",
      stock: 5,
      descripcion:
        "La Mejor Tarjeta De Video Para Jugar, Corre Todos Los Juegos Del Mundo.",
      img: "https://bip.cl/assets/fotos/31488/1..webp",
    },
  ];
  
  export const getProducts = () => {
    return new Promise((res) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
    });
  };
  
  export const getProductsByCategory = (category) => {
    return new Promise((res) => {
      const productosFiltrados = productos.filter(
        (prod) => prod.categoria === category
      );
      setTimeout(() => {
        res(productosFiltrados);
      }, 2000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((res) => {
      const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));
      setTimeout(() => {
        res(productoFiltrado);
      }, 2000);
    });
  };
  