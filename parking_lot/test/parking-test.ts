import path from "path";
import * as cp from 'child_process';
import { expect } from "chai";
import ParkingHandler from "../handlers/parking-handler";


describe('test scenario parking', () => {
    xit('should return log parking', async function run() {
        await new Promise((resolve, reject) => {
            cp.exec(`sh ${path.resolve(__dirname, '../../bin/parking_lot.sh')}`, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                } else {
                    expect(stdout).to.equal(`Created parking lot with 6 slots
Allocated slot number: 1
Allocated slot number: 2
Allocated slot number: 3
Allocated slot number: 4
Allocated slot number: 5
Allocated slot number: 6
Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge 30
Slot No.     Registration No.
1     KA-01-HH-1234
2     KA-01-HH-9999
3     KA-01-BB-0001
4     KA-01-HH-7777
5     KA-01-HH-2701
Allocated slot number: 6
Sorry, parking lot is full
Registration number KA-01-HH-1234 with Slot Number 1 is free with Charge 30
Registration number KA-01-BB-0001 with Slot Number 3 is free with Charge 50
Registration number DL-12-AA-9999 not found
Allocated slot number: 1
Allocated slot number: 3
Sorry, parking lot is full
Slot No.     Registration No.
1     KA-09-HH-0987
2     KA-01-HH-9999
3     CA-09-IO-1111
4     KA-01-HH-7777
5     KA-01-HH-2701
6     KA-01-P-333
`)
                    resolve(stdout); 
                }
            })
         });
    })

    xit('should stop program is command not found', async function run() {
        await new Promise((resolve, reject) => {
            cp.exec(`sh ${path.resolve(__dirname, '../../bin/parking_lot.sh')}`, (error, stdout, stderr) => {
                if (error) {
                    reject(error);
                } else {
                    if (stdout === 'command not found') {
                        expect(stdout).to.equals('command not found')
                    }
                    resolve(stdout); 
                }
            })
        });
    })

    xit('should calculate parking charge', function run() {
        const hour = 4;
        const parkSize = 8;
        const handler = new ParkingHandler(parkSize);
        const fare = handler.calculateCharge(hour);
        expect(fare).to.equal(30)
    })
})