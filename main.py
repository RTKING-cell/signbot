basic.show_leds("""
    # # # . .
    # . . # .
    # # # # .
    # . # . .
    # . . # .
    """)
radio.set_group(1)

def on_forever():
    radio.send_value("mgx", input.acceleration(Dimension.X))
    radio.send_value("mgy", input.acceleration(Dimension.Y))
basic.forever(on_forever)
