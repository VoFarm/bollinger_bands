# Bollinger Bands


## Usage Examples
```ts

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




## Considering Optimization Options
See https://hur.st/bloomfilter/?n=100000&p=0.6&m=&k=

### Number of Hash Functions
Increasing the number of hash functions used for the Bloomfilter (Bitset) population increases the probability that a specific item from the array is in fact represented by a specific (set) of bit(s). 

The downside is that with more hash functions the likelyhood that e.g. (almost) all Bits are set to 1 resulting in unnecessarily frequent "Perhaps" responses...  increases.

  
