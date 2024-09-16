basic.showLeds(`
    # # # . .
    # . . # .
    # # # # .
    # . # . .
    # . . # .
    `)
radio.setGroup(1)
basic.forever(function on_forever() {
    radio.sendValue("mgx", input.acceleration(Dimension.X))
    radio.sendValue("mgy", input.acceleration(Dimension.Y))
})
