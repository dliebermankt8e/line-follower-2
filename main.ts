input.onButtonPressed(Button.A, function () {
    Utilities.SetMotorEnabled(false)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    Utilities.SetMotorEnabled(true)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
})
motobit.enable(MotorPower.Off)
Utilities.SetMotorEnabled(false)
Utilities.SetLeftForwardSpeed(40)
Utilities.SetLeftTurnSpeed(10)
Utilities.SetRightForwardSpeed(40)
Utilities.SetRightTurnSpeed(10)
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
basic.forever(function () {
    if (!(Utilities.GetMotorEnabled())) {
        motobit.enable(MotorPower.Off)
    } else {
        if (Utilities.SensorDirection() == Utilities.Forward()) {
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, Utilities.GetLeftForwardSpeed())
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, Utilities.GetRightForwardSpeed())
            motobit.enable(MotorPower.On)
        } else if (Utilities.SensorDirection() == Utilities.Right()) {
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, Utilities.GetLeftForwardSpeed())
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, Utilities.GetRightTurnSpeed())
            motobit.enable(MotorPower.On)
        } else if (Utilities.SensorDirection() == Utilities.Left()) {
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, Utilities.GetLeftTurnSpeed())
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, Utilities.GetRightForwardSpeed())
            motobit.enable(MotorPower.On)
        } else {
            motobit.enable(MotorPower.Off)
        }
    }
})
