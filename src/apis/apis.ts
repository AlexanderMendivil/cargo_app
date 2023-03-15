import axios from "axios"
import { VehicleInterface } from "../types/types";

export const getVehicles = async () => {
    try{
        //TODO: cambiar el date al día actual, hacer un .env para la API
        const data = await axios.post('http://localhost:3000/dailyVehicles', { date: "2021-03-09"});

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