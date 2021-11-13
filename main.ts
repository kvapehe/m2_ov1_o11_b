/**
 * Stein saks og papir med bruk av liste av bilder.
 * 
 * Må eksperimentere litt mer med det med egene bilder.
 * 
 * Bildene som vises er show icon og disse finnes i et bibliotek.
 * 
 * Listen steinsakspapir inneholder tre variabler / bilder der verdiene under
 * 
 * representerer de ulike elementene i listen.
 * 
 * 0 er stein
 * 
 * 1 er saks
 * 
 * 2 er papir
 */
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        steinsakspapir = randint(0, 2)
        steinsakspapirliste[steinsakspapir].showImage(0)
        basic.pause(20)
    }
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . # . #
        . . . . .
        `)
    basic.pause(1000)
    // Viser et av de tre bildene over. Offset betyr hvor mye bildet skal forskyves i x-retning.
    steinsakspapirliste._pickRandom().showImage(0)
})
let steinsakspapirliste: Image[] = []
let steinsakspapir = 0
steinsakspapir = 0
steinsakspapirliste = [images.iconImage(IconNames.Diamond), images.iconImage(IconNames.Scissors), images.iconImage(IconNames.Square)]
basic.forever(function () {
	
})
