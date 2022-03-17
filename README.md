# Bollinger Bands


## Usage Examples
```ts

import { BollingerBandsService, IBollingerBands } from "https://deno.land/x/bollinger_bands/mod.ts"

const testSequenceMayBePricesOrPNLs = [4, 10, 13, 13]

const bollingerBands: IBollingerBands = BollingerBandsService.getBollingerBands(testSequenceMayBePricesOrPNLs)

console.log(bollingerBands.sma)
console.log(bollingerBands.lower)
console.log(bollingerBands.upper) 

```



## Execute Unit Tests
```sh
deno test https://deno.land/x/bollinger_bands/src/bollinger-bands-service.spec.ts
```

---
  
For further examples you can check the [unit tests]().

---

## Further Information & Links
https://lukkval.com/bollinger-bands-formula-and-calculation/

https://www.youtube.com/watch?v=-6cbdJulb7s


