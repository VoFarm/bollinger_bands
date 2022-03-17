
export enum EDirection {
    LONG,
    SHORT
}

export interface IBollingerBands {
    sma: number[]
    lower: number[]
    upper: number[]
}

export class BollingerBandsService {



    public getBollingerBands(sequence: number[]): IBollingerBands {

        const smaBand = this.getSMABand(sequence)
        const lowerBand: number[] = []
        const upperBand: number[] = []

        let counter = 0

        for (const entry of smaBand) {
            const helperBand = [...smaBand]

            const splicedHelperBand = helperBand.splice(counter, helperBand.length)
            const standardDeviation = this.getStandardDeviation(splicedHelperBand)

            lowerBand.push(entry - (standardDeviation * 2))
            upperBand.push(entry + (standardDeviation * 2))

            counter++
        }

        return {
            sma: smaBand,
            lower: lowerBand,
            upper: upperBand
        }
    }


    public getSMABand(sequence: number[]): number[] {

        let counter = 0
        let sum = 0
        let result = []

        for (const entry of sequence) {
            counter++
            sum = sum + entry

            result.push(sum / counter)
        }

        return result

    }

    public getStandardDeviation(sequence: number[]) {

        const average = this.calculateAverage(sequence)

        const substractedMeanFromEachAndSquared = this.substractMeanFromEachAndSquare(sequence, average)

        const meanOfSquaredDifferences = this.calculateAverage(substractedMeanFromEachAndSquared)

        return Math.sqrt(meanOfSquaredDifferences)

    }


    public calculateAverage(sequence: number[]) {

        let sum = 0

        for (const entry of sequence) {
            sum = sum + entry
        }

        return sum / sequence.length

    }

    private substractMeanFromEachAndSquare(sequence: number[], average: number): number[] {

        let squaredDifferences = []

        for (const entry of sequence) {
            squaredDifferences.push((entry - average) ** 2)
        }

        return squaredDifferences
    }

}
