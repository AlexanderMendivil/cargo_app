import { Vehicle } from '../types/types';
import vehicleItemStyle from './VehicleItem.module.css';
import image from '../assets/images/sit.jpeg';


//prop del vehiculo
interface VehicleItemsPros{
    vehicle: Vehicle
}
export const VehicleItem = ( { vehicle }: VehicleItemsPros ) => {
  return (

    // class para hacer una carta que ocupe 3 col con margen en el top 5, margen right de 3 y margen left en 3
    <div className="card col-3 mt-5 me-3 mx-3">

      {/* clase para el cuerpo de la carta */}
  <div className="card-body">
    <h5 className="card-title text-center">{vehicle.id}</h5>
    <img src={image} alt="" className='img-thumbnail rounded mx-auto d-block'/>
    <p className={`text-center ${vehicle.status ? vehicleItemStyle.activeStatus : vehicleItemStyle.inactiveStatus}`}>Status</p>
    <p className="text-center">{vehicle.usuario}</p>
  </div>
</div>
  )
}
