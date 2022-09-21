input.onButtonPressed(Button.A, function () {
    if (counter < 5) {
        counter += 1
        basic.showLeds(`
            . . . . .
            . . . # #
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.clearScreen()
        basic.pause(200)
        basic.showString("REST")
    } else {
        basic.showString("FULL")
    }
})
input.onButtonPressed(Button.AB, function () {
    if (counter > 5 && (counter2 > 5 && counter3 > 5)) {
        counter = 0
        counter2 = 0
        counter3 = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (counter3 < 5) {
        counter3 += 1
        basic.showLeds(`
            . . . . .
            # # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.clearScreen()
        basic.pause(200)
        basic.showString("PMD")
    } else {
        basic.showString("FULL")
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (counter2 < 5) {
        counter2 += 1
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.clearScreen()
        basic.pause(200)
        basic.showString("PAPER")
    } else {
        basic.showString("FULL")
    }
})
let counter3 = 0
let counter2 = 0
let counter = 0
counter = 0
counter2 = 0
counter3 = 0
basic.forever(function () {
	
})
