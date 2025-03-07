radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(14)
    basic.showString("bom dia")
    basic.showLeds(`
        . # . # .
        # # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(3)
    basic.showNumber(14)
    basic.showString("bom dia")
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
radio.setGroup(1)
