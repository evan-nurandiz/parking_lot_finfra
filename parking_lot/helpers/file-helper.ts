export const fileToCommandLine = (fileText: string) => {
    const commandList:Array<string> = fileText.split(/\r?\n/);

    if (typeof commandList !== 'object') {
        throw new Error('file not valid')
    }

    const parkingSize:number = parseInt(commandList[0].split(" ")[1])
    commandList.shift()

    return {
        parkingSize,
        commandList
    }
}