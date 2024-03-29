# Bollinger Bands

[Bollinger Bands](https://www.youtube.com/watch?v=-6cbdJulb7s) as simple as it gets.
  
This [module](https://deno.land/x/bollinger_bands) helps to stabilize the buy price and increase the sell price for [Freedom Cash](https://FreedomCash.org).   

  
## Usage Example
```ts

import { BollingerBandsService, IBollingerBands } from "https://deno.land/x/bollinger_bands/mod.ts"

const testSequenceMayBePricesOrPNLs = [4, 10, 13, 13]

const bollingerBands: IBollingerBands = BollingerBandsService.getBollingerBands(testSequenceMayBePricesOrPNLs)

console.log(bollingerBands.sma)
console.log(bollingerBands.lower)
console.log(bollingerBands.upper) 

```

  
## Execute Usage Example
```sh
deno run https://deno.land/x/bollinger_bands/usage-example.ts
```

  
## Usage Example Freedom Cash
See also [this module](https://deno.land/x/freedom_cash).

```sh
deno run --allow-read --allow-write https://deno.land/x/freedom_cash/usage-example.ts
```

  
## Execute Unit Tests
```sh
deno test https://deno.land/x/bollinger_bands/src/bollinger-bands-service.spec.ts
```

  
For further examples you can check the [unit tests](https://github.com/VoFarm/bollinger_bands/blob/main/src/bollinger-bands-service.spec.ts).
  
    
## Donations
We are already free. If you want to donate, you might consider donating to the [otherparty.co.uk](https://www.otherparty.co.uk/donate-crypto-the-other-party) to ensure people do not need to donate to victims but rather donate successfully to problem solvers.  
  
![direct-democracy](https://github.com/michael-spengler/sleep/assets/145258627/fe97b7da-62b4-4cf6-9be0-7b03b2f3095a)  

