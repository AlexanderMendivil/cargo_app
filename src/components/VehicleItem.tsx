import { Vehicle } from '../types/types';
import vehicleItemStyle from './Vehicle.module.css';
import image1 from '../assets/images/upp.jpeg';
import image2 from '../assets/images/sit.jpeg';
import image3 from '../assets/images/down.jpeg';


//prop del vehiculo
interface VehicleItemsPros{
    vehicle: Vehicle
}

const randomImage = () =>{
  const imageRandom = Math.round(Math.random() * 3);
  return  imageRandom === 1 ? image1 : imageRandom === 2 ? image2 : image3;
}

export const VehicleItem = ( { vehicle }: VehicleItemsPros ) => {
  return (

    // class para hacer una carta que ocupe 3 col con margen en el top 5, margen right de 3 y margen left en 3
    <div className={`card col-3 mt-3 mx-3 mb-1 ${vehicleItemStyle.backgroundTransparent}`}>
      {/* clase para el cuerpo de la carta */}
  <div className="card-body">

    <h5 className="card-title text-center">{vehicle.id}</h5>

        <img src={randomImage()} alt="" className='img-thumbnail rounded mx-auto d-block w-25 h-25'/>

      <div className={` ${vehicleItemStyle.imageBottomStyle}`}>
          <h3 className={`text-center ${vehicle.status ? vehicleItemStyle.activeStatus : vehicleItemStyle.inactiveStatus}`}>Status</h3>
          <p className="text-center">{vehicle.usuario}</p>
      </div>

  </div>
</div>
  )
}
