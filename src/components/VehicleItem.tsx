import { VehicleInterface } from '../types/types';
import vehicleItemStyle from './Vehicle.module.css';
import upp from '../assets/images/upp.jpeg';
import sit from '../assets/images/sit.jpeg';
import down from '../assets/images/down.jpeg';


//prop del vehiculo
interface VehicleItemsPros{
    vehicle: VehicleInterface
}

const getImage = (vehicleType: string) =>{
  return vehicleType === 'Motrec' ? down : vehicleType === 'HP' ? upp : sit;
}

export const VehicleItem = ( { vehicle }: VehicleItemsPros ) => {
  return (

    // class para hacer una carta que ocupe 3 col con margen en el top 5, margen right de 3 y margen left en 3
    <div className={`card col-3 mt-3 mx-3 mb-1 ${vehicleItemStyle.backgroundItem}`}>
      {/* clase para el cuerpo de la carta */}
  <div className="card-body">

    <h5 className="card-title text-center">{vehicle.id}</h5>

        <img src={getImage(vehicle.tipo_equipo)} alt="" className='img-thumbnail rounded mx-auto d-block w-25 h-25'/>

      <div className={` ${vehicleItemStyle.imageBottomStyle}`}>
        {/* TODO: cambiar claxon por status */}
          <h3 className={`text-center ${vehicle.estado_equipo === 'Activo' ? vehicleItemStyle.activeStatus : vehicleItemStyle.inactiveStatus}`}>Status</h3>
          <p className="text-center">{vehicle.nombre}</p>
      </div>

  </div>
</div>
  )
}
