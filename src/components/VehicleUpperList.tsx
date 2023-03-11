import { ListType } from "../enums/ListTypeEnum";
import { Vehicle } from "../types/types";
import { VehicleItem } from "./VehicleItem";
import vehicleStyles from './Vehicle.module.css'

// Props del componente
interface VehicleUpperListProps{
    vehicleList: Vehicle[];
    typeList: ListType;
}

export const VehicleUpperList = ( { vehicleList, typeList }: VehicleUpperListProps ) => {


  console.log(typeList);
  return (
    // lista en forma de fila con "row"
    <div className={`row m-1 ${ typeList === ListType.upper ? vehicleStyles.backgroundUpper : vehicleStyles.backgroundBottom}`}>

      {/* Una col para espacio */}
        <div className="col-1"></div>

        {/* Iteracion de la lista de vehiculos donde renderizamos el vehiculo individual */}
        {vehicleList.map( (vehicle, index) => <VehicleItem key={ index } vehicle={vehicle}/>)}
    </div>
  )
}
