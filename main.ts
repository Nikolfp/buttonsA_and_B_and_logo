input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    basic.pause(500)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Target)
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
    basic.showIcon(IconNames.Sad)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Heart)
})
