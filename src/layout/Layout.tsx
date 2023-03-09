import { VehicleUpperList } from "../components/VehicleUpperList"
import { Vehicle } from "../types/types";

const list:Vehicle[] = [ {id: 1, name: 'cargo', status: true, usuario: 'test'}, {id: 1, name: 'cargo', status: true, usuario: 'test'}, {id: 1, name: 'cargo', status: true, usuario: 'test'} ];
export const Layout = () => {
  return (
    <div className='col-12'>
            <VehicleUpperList vehicleList={list} />
            <VehicleUpperList vehicleList={list} />
    </div>
  )
}
