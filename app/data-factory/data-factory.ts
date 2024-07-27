interface DataStore {
    slotNumber: number;
    key: string | null;
}

class DataFactory {
    dataSize: number;
    private dataSet: Array<DataStore>;
   
    constructor(dataSize: number){
        this.dataSize = dataSize;
        this.dataSet = [];
    }

    initDataFactory = () => {
        console.log(`Created parking lot with ${this.dataSize} slots`);
        for (let k = 1; k <= this.dataSize; k++) {
            this.dataSet.push({
                slotNumber: k,
                key: null
            })
        }
    }

    removeOneData = (key:string, charge: number) => {
        const carData = this.dataSet.find((d) => d.key === key);
        if (!carData) {
            console.log(`Registration number ${key} not found`)
            return null;
        }
        console.log(`Registration number ${carData.key} with Slot Number ${carData.slotNumber} is free with Charge ${charge}`)
        this.dataSet.find((d) => d.slotNumber === carData.slotNumber).key = null;
        return carData.slotNumber;
    }

    addOneData = (key:string, parkingSlot: number) => {
        this.dataSet.find((d) => d.slotNumber === parkingSlot).key = key;
        console.log(`Allocated slot number: ${parkingSlot}`)
    }

    getAllData = () => {
        console.log('Slot No.     Registration No.')
        if (this.dataSet.length > 0) {
            this.dataSet.forEach((d) => {
                if (d.key) {
                    console.log(`${d.slotNumber}     ${d.key}`)
                }
            })
        }
    }
}

export default DataFactory;