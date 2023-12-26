// I buy and sell https://FreedomCash.org 
import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { BollingerBandsService } from "./bollinger-bands-service.ts"

Deno.test("should deliver bollinger bands", async () => {

    const testSequenceMayBePricesOrPNLs = [4, 10, 13, 13, 3]

    const expectedSMABand = [4, 7, 9, 10, 8.6]
    const bollingerBands = BollingerBandsService.getBollingerBands(testSequenceMayBePricesOrPNLs, 5)

    const actualSMABand: number[] = bollingerBands.sma
    assertEquals(expectedSMABand, actualSMABand)

    const expectedLowerBand: number[] = [-1.4025456962435765, -4.543396380615194, -2.1579568022106983, 0.16701978035143128, -2.8564392373895995]
    assertEquals(expectedLowerBand, bollingerBands.lower)

    const expectedUpperBand: number[] = [9.402545696243577, 18.543396380615192, 20.1579568022107, 19.83298021964857, 20.056439237389597]
    assertEquals(expectedUpperBand, bollingerBands.upper)

})

Deno.test("should deliver standard deviation", async () => {

    const expectedStandardDeviation = 3.1622776601683795
    assertEquals(expectedStandardDeviation, BollingerBandsService.getStandardDeviation([6, 8, 12, 14]))

})
