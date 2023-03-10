import { VehicleUpperList } from "../components/VehicleUpperList"
import { Vehicle } from "../types/types";

// Lista de los vehiculos
const list:Vehicle[] = [ {id: 1, name: 'cargo', status: true, usuario: 'test'}, {id: 1, name: 'cargo', status: true, usuario: 'test'}, {id: 1, name: 'cargo', status: true, usuario: 'test'} ];
export const Layout = () => {
  return (

    // clase col-12, ocupa 12 columnas en la pantalla ( toda la pantalla )
    <div className='col-12'>
      {/* Lista superior */}
            <VehicleUpperList vehicleList={list} />
      {/* Lista inferior */}
            <VehicleUpperList vehicleList={list} />
    </div>
  )
}
