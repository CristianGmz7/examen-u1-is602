import { Colors } from "@/constants/Colors";
import { useState } from "react";

export const useColor = () => {
    const [currentColor, setCurrentColor] = useState(`${Colors.limeGreen}`);

    const hexadecimalCaracters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    const generateNewColor = () => {
        let newCombination : string;

        newCombination = '#'
        for (let i = 1; i < 7; i++) {

            let newNumber = getRandomInt(16)
            let newCaracter = hexadecimalCaracters.at(newNumber) ?? '0';
            
            newCombination.concat(newCaracter)
            // console.log({index: i, value: newCaracter})
        }

        console.log(newCombination)


        setCurrentColor(newCombination);
    }

    const getRandomInt = (max: number) => {
        return Math.floor(Math.random() * max);
      }

    return {
        currentColor,

        generateNewColor,
    }
};