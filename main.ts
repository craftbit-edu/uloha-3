function otocDoprava (čas: number) {
    wuKong.mecanumRun(wuKong.RunList.right, 250)
    basic.pause(čas)
    wuKong.mecanumStop()
}
function jedRovne (čas: number) {
    wuKong.mecanumRun(wuKong.RunList.Front, 250)
    basic.pause(1000)
    wuKong.mecanumStop()
}
function otocDoleva (čas: number) {
    wuKong.mecanumRun(wuKong.RunList.left, 250)
    basic.pause(čas)
    wuKong.mecanumStop()
}
function Nastavení () {
    wuKong.mecanumWheel(
    wuKong.ServoList.S5,
    wuKong.ServoList.S1,
    wuKong.ServoList.S7,
    wuKong.ServoList.S3
    )
    rychlost = 250
}
let rychlost = 0
Nastavení()
let strana = 1000
let uhel90 = 1250
let uhel45 = uhel90 / 2
let uhel105 = uhel90 + uhel45
let uhlopricka = Math.sqrt(strana * strana + strana * strana)
basic.showIcon(IconNames.Yes)
jedRovne(strana)
otocDoleva(uhel105)
jedRovne(uhlopricka)
otocDoprava(uhel105)
jedRovne(uhlopricka)
otocDoprava(uhel105)
jedRovne(strana)
otocDoprava(uhel45)
jedRovne(uhlopricka / 2)
otocDoprava(uhel90)
jedRovne(uhlopricka / 2)
otocDoprava(uhel45)
jedRovne(strana)
basic.showIcon(IconNames.House)
