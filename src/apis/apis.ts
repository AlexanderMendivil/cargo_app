import axios from "axios"
import moment from "moment";
import { VehicleInterface } from "../types/types";

export const getVehicles = async () => {
    try{
        const date = moment();
        //TODO: cambiar el date de la peticion por este formato: date.format('YYYY-MM-D')
        const data = await axios.post('http://localhost:3000/dailyVehicles', { date: '2021-03-19' });

        const mercadoArray:VehicleInterface[] = [];
        const meteringArray:VehicleInterface[] = [];

        for(let i = 0; i < data?.data.length; i++){
            if(data?.data[i].area === 'Mercado') mercadoArray.push(data?.data[i])
            if(data?.data[i].area === 'Metering') meteringArray.push(data?.data[i])
        }
        return { mercadoArray, meteringArray };
    }catch(e){
        console.log(e)
    }
}