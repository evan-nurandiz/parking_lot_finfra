import { readFileSync } from 'fs';
import path from 'path';
import ParkingHandler from './handlers/parking-handler';
import { fileToCommandLine } from './helpers/file-helper';

const file = readFileSync(path.join(__dirname, 'fixtures/file_input.txt'), 'utf-8');

try {
    if (!file) {
        console.log('file not found')
    } else {
        const {parkingSize, commandList} = fileToCommandLine(file);
    
        const handler = new ParkingHandler(parkingSize)
        handler.init()
    
        commandList.forEach((c: string) => {
            handler.handleCommand(c)
        })
    }
} catch (err) {
    throw new Error(err)
}
