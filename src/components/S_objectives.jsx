const goals = [
  { id: 1, goal: "Incrementar venta de camisetas", target: 5000, progress: 2500, compliance: 50 },  
  { id: 2, goal: "Expandir ventas online", target: 100000, progress: 5000, compliance: 5 },     
  { id: 3, goal: "Aumentar presencia en tiendas físicas", target: 100, progress: 90, compliance: 90 }, 
  { id: 4, goal: "Reducir costos operativos", target: 20, progress: 4, compliance: 20 },          
  { id: 5, goal: "Incrementar participación en eventos", target: 50, progress: 30, compliance: 60 }   
];

const Objectives = () => {
  return (
    <section id="objectives" className="p-6 text-white ">
      <h2 className="text-2xl font-bold mb-4">3. Objetivos Estratégicos</h2>
      <div className="overflow-x-auto pb-6">
        <table className="min-w-full border-collapse border border-gray-400 bg-azulclaro">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Código</th>
              <th className="border border-gray-300 p-2">Objetivo</th>
              <th className="border border-gray-300 p-2">Meta</th>
              <th className="border border-gray-300 p-2">Avance</th>
              <th className="border border-gray-300 p-2">Cumplimiento</th>
              <th className="border border-gray-300 p-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            {goals.map((goal) => (
              <tr key={goal.id}>
                <td className="border border-gray-300 p-2">{goal.id}</td>
                <td className="border border-gray-300 p-2">{goal.goal}</td>
                <td className="border border-gray-300 p-2">{goal.target}</td>
                <td className="border border-gray-300 p-2">{goal.progress}</td>
                <td className="border border-gray-300 p-2">{goal.compliance}%</td>
                <td className={`border p-2 ${goal.compliance <= 35 ? "text-red-500" : goal.compliance <= 75 ? "text-orange-500" : "text-green-500"}`}>
                  {goal.compliance <= 35 ? "Crítico" : goal.compliance <= 75 ? "Aceptable" : "Exitoso"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Objectives;