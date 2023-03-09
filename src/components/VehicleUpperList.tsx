import { Vehicle } from "../types/types";
import { VehicleItem } from "./VehicleItem";

interface VehicleUpperListProps{
    vehicleList: Vehicle[];
}

export const VehicleUpperList = ( { vehicleList }: VehicleUpperListProps ) => {
  return (
    <div className="row">
        <div className="col-1"></div>
        {vehicleList.map( vehicle => <VehicleItem vehicle={vehicle}/>)}
    </div>
  )
}
