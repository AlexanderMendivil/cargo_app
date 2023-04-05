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
      if(data?.mercadoArray.length !== mercadoVehicles?.length){
        setMercadoVehicles(data?.mercadoArray);
      }
      if(data?.meteringArray.length !== mercadoVehicles?.length){
        setMeteringVehicles(data?.meteringArray);

      }
    }

    const interval = setInterval(()=>{
      apiCall();

    }, 3000);
    return () => clearInterval(interval);
  },[])


  return (

    // clase col-12, ocupa 12 columnas en la pantalla ( toda la pantalla )
    <div  id="scroll" className='col-12 h-100'>
      {/* Lista superior */}
            <VehicleUpperList vehicleList={mercadoVehicles} typeList={ListType.upper} />

            {!mercadoVehicles && !meteringVehicles ? <hr/> : null}
      {/* Lista inferior */}
            <VehicleUpperList vehicleList={meteringVehicles} typeList={ListType.bottom}/>
    </div>
  )
}
