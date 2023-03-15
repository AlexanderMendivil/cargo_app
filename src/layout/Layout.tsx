import { useEffect, useState } from "react";
import { getVehicles } from "../apis/apis";
import { VehicleUpperList } from "../components/VehicleUpperList"
import { ListType } from "../enums/ListTypeEnum";
import { VehicleInterface } from "../types/types";

// Lista de los vehiculos
export const Layout = () => {

  const [ mercadoVehicles, setMercadoVehicles ] = useState<VehicleInterface[]>();
  const [ meteringVehicles, setMeteringVehicles ] = useState<VehicleInterface[]>();

  useEffect(()=>{
    const apiCall = async () => {
      const data = await getVehicles();
      setMercadoVehicles(data?.mercadoArray);
      setMeteringVehicles(data?.meteringArray);
    }
    apiCall();
  },[])

  return (

    // clase col-12, ocupa 12 columnas en la pantalla ( toda la pantalla )
    <div className='col-12 h-100'>
      {/* Lista superior */}
            <VehicleUpperList vehicleList={mercadoVehicles} typeList={ListType.upper} />
      {/* Lista inferior */}
            <VehicleUpperList vehicleList={meteringVehicles} typeList={ListType.bottom}/>
    </div>
  )
}
