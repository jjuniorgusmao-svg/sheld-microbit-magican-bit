/**
* Definições de blocos para o Shield Magican Bit
*/

enum Sentido {
    //% block="frente"
    Frente = 0,
    //% block="tras"
    Tras = 1
}

enum MotorSelect {
    //% block="ML"
    ML = 0,
    //% block="MR"
    MR = 1
}

//% weight=100 color=#FF6600 icon="\uf1b9"
namespace SHIELD {

    /**
     * Define a velocidade, sentido e motor
     * @param n velocidade de 0 a 100, eg: 50
     * @param e sentido do motor (frente ou tras)
     * @param p motor a ser acionado (ML ou MR)
     */
    //% block="velocidade %n sentido %e motor %p"
    //% n.min=0 n.max=100 n.defl=50
    //% e.defl=Sentido.Frente
    //% p.defl=MotorSelect.ML
    export function velocidade(n: number, e: Sentido, p: MotorSelect): void {
        let velocidade: number = 0

        if (n == 0) {
            velocidade = 0
        } else {
            velocidade = Math.map(n, 1, 100, 450, 1023)
        }

        // Selecionou ML -> aciona os pinos P13 e P14 (MR original)
        if (e == Sentido.Frente && p == MotorSelect.ML) {
            pins.analogWritePin(AnalogPin.P13, velocidade)
            pins.digitalWritePin(DigitalPin.P14, 0)
        }
        if (e == Sentido.Tras && p == MotorSelect.ML) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.analogWritePin(AnalogPin.P14, velocidade)
        }

        // Selecionou MR -> aciona os pinos P15 e P16 (ML original)
        if (e == Sentido.Frente && p == MotorSelect.MR) {
            pins.analogWritePin(AnalogPin.P15, velocidade)
            pins.digitalWritePin(DigitalPin.P16, 0)
        }
        if (e == Sentido.Tras && p == MotorSelect.MR) {
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.analogWritePin(AnalogPin.P16, velocidade)
        }
    }

    /**
     * Para o motor selecionado
     * @param P motor a ser desligado
     */
    //% block="parar motor %P"
    //% P.defl=MotorSelect.ML
    export function parar(P: MotorSelect): void {
        if (P == MotorSelect.ML) {
            pins.digitalWritePin(DigitalPin.P13, 0)
            pins.digitalWritePin(DigitalPin.P14, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P15, 0)
            pins.digitalWritePin(DigitalPin.P16, 0)
        }
    }
}