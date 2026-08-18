/**

* Use este arquivo para definir funções e blocos personalizados.

* Saiba mais em https://makecode.microbit.org/blocks/custom

*/



enum MyEnum {

  

  
         //% block="frente"

    One,


    
        //% block="tras"

    Two



}

enum MLouMR {


     //% block="MR"
    

    One,

  
    //% block="ML"

    Two



}



/**

 * Custom blocks

 */

//% weight=100 color=#FF6600 icon="\uf1b9"

namespace SHIELD {

    /**

     * TODO: describe your function here

     * @param n describe parameter here, eg: 



     * @param e describe parameter here

     */

    //% block

    export function velocidade(n: number, e: MyEnum, p: MLouMR): void {

        let velocidade: number = 0

        if (n == 0) {

            velocidade = 0

        }

        else {

            velocidade = (Math.map(n, 0, 100, 450, 1023))

        }

        if (e == MyEnum.One && p == MLouMR.One) {

            pins.analogWritePin(AnalogPin.P15, velocidade)
            pins.digitalWritePin(DigitalPin.P16, 0)

        }

        if (e == MyEnum.Two && p == MLouMR.One) {

            pins.digitalWritePin(DigitalPin.P15, 0)

            pins.analogWritePin(AnalogPin.P16, velocidade)



        }

        if (e == MyEnum.One && p == MLouMR.Two) {

            pins.analogWritePin(AnalogPin.P13, velocidade)

            pins.digitalWritePin(DigitalPin.P14, 0)

        }

        if (e == MyEnum.Two && p == MLouMR.Two) {

            pins.digitalWritePin(DigitalPin.P13, 0)

            pins.analogWritePin(AnalogPin.P14, velocidade)



        }













    }





    /**

     * TODO: describe your function here

     * @param value describe value here, eg: 5

     */

    //% block

    export function parar(P: MLouMR): void {

        if (P == MLouMR.Two) {



            pins.digitalWritePin(DigitalPin.P13, 0)

            pins.digitalWritePin(DigitalPin.P14, 0)

        } else {

            pins.digitalWritePin(DigitalPin.P15, 0)

            pins.digitalWritePin(DigitalPin.P16, 0)



        }

    }



}



