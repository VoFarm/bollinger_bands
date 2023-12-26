// I buy and sell https://FreedomCash.org 
import { BollingerBandsService, IBollingerBands } from "https://deno.land/x/bollinger_bands/mod.ts"

const testSequenceMayBePricesOrPNLs = [4, 10, 13, 13]
const bollingerBands: IBollingerBands = BollingerBandsService.getBollingerBands(testSequenceMayBePricesOrPNLs)

console.log(bollingerBands.sma)
console.log(bollingerBands.lower)
console.log(bollingerBands.upper) 