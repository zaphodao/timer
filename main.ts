input.onButtonPressed(Button.A, function () {
    contador += 1
    basic.showNumber(contador)
})
music.onEvent(MusicEvent.MelodyStarted, function () {
    basic.showString("Acabou!")
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    for (let index = 0; index < contador; index++) {
        contador += -1
        basic.showNumber(contador)
        basic.pause(1000)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    contador += -1
    basic.showNumber(contador)
})
let contador = 0
contador = 10
basic.showNumber(contador)
basic.forever(function () {
	
})
