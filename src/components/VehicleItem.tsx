import { Vehicle } from '../types/types';
import vehicleItemStyle from './VehicleItem.module.css';
import image from '../assets/images/sit.jpeg';

interface VehicleItemsPros{
    vehicle: Vehicle
}
export const VehicleItem = ( { vehicle }: VehicleItemsPros ) => {
  return (
    <div className="card col-3 mt-5 m-3">
  <div className="card-body">
    <h5 className="card-title text-center">{vehicle.id}</h5>
    <img src={image} alt="" className='img-thumbnail rounded mx-auto d-block'/>
    <p className={`text-center ${vehicle.status ? vehicleItemStyle.activeStatus : vehicleItemStyle.inactiveStatus}`}>Status</p>
    <p className="text-center">{vehicle.usuario}</p>
  </div>
</div>
  )
}
