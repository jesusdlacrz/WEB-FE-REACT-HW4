const data = [
  { id: 1, type: "Debilidades", items: [
      { id: 1, description: "1. Poca distribución en tiendas físicas" },
      { id: 2, description: "2. Falta de variedad de productos" },
      { id: 3, description: "3. Precios altos" }
    ]
  },
  { id: 2, type: "Oportunidades", items: [
      { id: 1, description: "1. Expansión a mercados internacionales" },
      { id: 2, description: "2. Venta en plataformas digitales" },
      { id: 3, description: "3. Alianzas con otros equipos" }
    ]
  },
  { id: 3, type: "Fortalezas", items: [
      { id: 1, description: "1. Equipo reconocido a nivel nacional" },
      { id: 2, description: "2. Leal base de aficionados" },
      { id: 3, description: "3. Productos oficiales de alta calidad" }
    ]
  },
  { id: 4, type: "Amenazas", items: [
      { id: 1, description: "1. Competencia con productos piratas" },
      { id: 2, description: "2. Cambios en la preferencia del consumidor" },
      { id: 3, description: "3. Crisis económica" }
    ]
  }
];

const Diagnosis = () => {
  return (
    <section id="diagnosis" className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">1. Diagnóstico Actual</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {data.map((category) => (
          <div key={category.id} className="p-4 bg-azulclaro hover:shadow-md transition-shadow duration-300 hover:shadow-black">
            <h3 className="font-semibold mb-2">{category.type}</h3>
            <ul>
              {category.items.map((item) => (
                <li key={item.id}>{item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Diagnosis;
