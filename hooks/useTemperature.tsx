import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react"

export const useTemperature = () => {

    const [temperature, setTemperature] = useState(26);
    const [currentColor, setCurrentColor] = useState(`${Colors.limeGreen}`);

    useEffect(() => {

        if(temperature < 15){
            setCurrentColor(Colors.blue)
            return;
        }
        if(temperature > 25){
            setCurrentColor(Colors.red)
            return;
        }

        setCurrentColor(Colors.limeGreen)
        return;


    }, [temperature])
    

    const incrementTemperature = () => {
        setTemperature(temperature + 1);
    }

    const decrementTemperature = () => {
        setTemperature(temperature - 1)
    }

    return {
        temperature,
        currentColor,

        incrementTemperature,
        decrementTemperature,
    }
}