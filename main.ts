input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            # . # . .
            . # # . .
            # # # . .
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . # . #
            . . # # .
            . . # # #
            . # . # .
            . # . # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.showIcon(IconNames.Sad)
    }
})
