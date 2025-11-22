type Props = {
    viajes: any[];
};

const ViajeTable = ({ viajes }: Props) => {
    if (!viajes || viajes.length === 0) {
        return <p className="text-center mt-4">No se han encontrado viajes.</p>;
    }

    return (
        <div className="overflow-x-auto mt-4">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Carro</th>
                        <th>Origen</th>
                        <th>Destino</th>
                        <th>Duración (hrs)</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {viajes.map((viaje) => (
                        <tr key={viaje.id}>
                            <td>{viaje.id}</td>
                            <td>{viaje.carro}</td>
                            <td>{viaje.ciudad_origen}</td>
                            <td>{viaje.ciudad_destino}</td>
                            <td>{viaje.tiempo_horas}</td>
                            <td>{viaje.fecha}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViajeTable;
