/*
    Call a constructor without 'new' keyword
    Significance of 'new.target'
*/

function AppleDevice(deviceName, deviceOS) {
    if(!new.target) {
        return `Get an ${deviceName} with ${deviceOS}`
    }
    this.deviceName = deviceName,
    this.deviceOS = deviceOS
}

const device1 = AppleDevice("Iphone13", "IOS14")
const device2 = new AppleDevice("Iphone14", "IOS16")
console.log(device1)
console.log(device2)