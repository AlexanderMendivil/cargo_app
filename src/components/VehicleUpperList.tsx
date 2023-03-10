import { Vehicle } from "../types/types";
import { VehicleItem } from "./VehicleItem";

// Props del componente
interface VehicleUpperListProps{
    vehicleList: Vehicle[];
}

export const VehicleUpperList = ( { vehicleList }: VehicleUpperListProps ) => {
  return (

    // lista en forma de fila con "row"
    <div className="row">

      {/* Una col para espacio */}
        <div className="col-1"></div>

        {/* Iteracion de la lista de vehiculos donde renderizamos el vehiculo individual */}
        {vehicleList.map( vehicle => <VehicleItem vehicle={vehicle}/>)}
    </div>
  )
}
