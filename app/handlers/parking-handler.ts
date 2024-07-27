import DataFactory from "../data-factory/data-factory"

class ParkingHandler extends DataFactory {
    parkingSize: number
    parkingCommand: Array<string> = ['park', 'leave', 'status']
    availbleSlot: Array<number>;

    constructor(parkingSize: number) {
        super(parkingSize)
        this.parkingSize = parkingSize
        this.availbleSlot = [];
    }

    init = () => {
        for (let k = 1; k <= this.dataSize; k++) {
            this.availbleSlot.push(k)
        }
        this.initDataFactory()
    }

    handleCommand = (cmd: string) => {
        const defineCommand = cmd.split(" ");
        switch (defineCommand[0]) {
            case 'park':
                this.parkCar(defineCommand[1])
                break;
            case 'leave':
                let hours:number = 0;
                if (defineCommand[2]) {
                    hours = this.calculateCharge(parseInt(defineCommand[2]));
                }
                
                this.leaverCar(defineCommand[1], hours)
                break;
            case 'status':
                this.getAllData()
                break;
            default:
                if (defineCommand[0]) {
                    !this.parkingCommand.includes(defineCommand[0]) ? console.log('command not found') : console.log('command not exist')
                }

                return true;
        }
    }

    calculateCharge = (hour: number) => {
        if (hour <= 2) return 10

        if (hour > 2) return 10 + ((hour - 1) * 10)
    }

    parkCar = (key: string) => {
        // check if slot avaible
        if (this.availbleSlot.length > 0) {
            // get closest place
            const parkSlot = Math.min(...this.availbleSlot);
            this.addOneData(key, parkSlot);
            this.availbleSlot = this.availbleSlot.filter((s) => s !== parkSlot);
        } else {
            console.log('Sorry, parking lot is full')
        }
    }

    leaverCar = (key: string, charge: number) => {
        const avaibleSlot = this.removeOneData(key, charge)
        if (avaibleSlot) this.availbleSlot.push(avaibleSlot)
    }
}

export default ParkingHandler;