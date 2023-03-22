import { ListType } from "../enums/ListTypeEnum";
import { VehicleInterface } from "../types/types";
import { VehicleItem } from "./VehicleItem";
import vehicleStyles from './Vehicle.module.css'

// Props del componente
interface VehicleUpperListProps{
    vehicleList?: VehicleInterface[];
    typeList: ListType;
}

export const VehicleUpperList = ( { vehicleList, typeList }: VehicleUpperListProps ) => {

  return (
      // lista en forma de fila con "row" 
    <div className={`row h-50 ${ typeList === ListType.upper ? vehicleStyles.backgroundUpper : vehicleStyles.backgroundBottom}`}>
    <h1 className="text-center">{typeList === ListType.upper ? 'Mercado' : 'Metering'}</h1>
      
      {/* Una col para espacio */}
        <div className="col-1"></div>

        {/* Iteracion de la lista de vehiculos donde renderizamos el vehiculo individual */}
        <div className={`${vehicleStyles.overflowList}`}>
          {vehicleList?.map( (vehicle, index) => <VehicleItem key={ index } vehicle={vehicle}/>)}
        </div>
    </div>
  )
}
