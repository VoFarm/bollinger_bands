import { assertEquals } from "https://deno.land/std@0.86.0/testing/asserts.ts"
import { BollingerBandsService } from "./bollinger-bands-service.ts"

Deno.test("should deliver bollinger bands", async () => {

    const testSequenceMayBePricesOrPNLs = [4, 10, 13, 13]

    const expectedSMABand = [4, 7, 9, 10]
    const actualSMABand: number[] = BollingerBandsService.getBollingerBands(testSequenceMayBePricesOrPNLs).sma
    assertEquals(expectedSMABand, actualSMABand)

    const expectedLowerBand: number[] = [-0.5825756949558398, 4.5055617421507055, 8, 10]
    const actualLowerBand: number[] = BollingerBandsService.getBollingerBands(testSequenceMayBePricesOrPNLs).lower
    assertEquals(expectedLowerBand, actualLowerBand)

    const expectedUpperBand: number[] = [8.582575694955839, 9.494438257849295, 10, 10]
    const actualUpperBand: number[] = BollingerBandsService.getBollingerBands(testSequenceMayBePricesOrPNLs).upper
    assertEquals(expectedUpperBand, actualUpperBand)

})

Deno.test("should deliver standard deviation", async () => {

    const expectedStandardDeviation = 3.1622776601683795
    assertEquals(expectedStandardDeviation, BollingerBandsService.getStandardDeviation([6, 8, 12, 14]))

})
