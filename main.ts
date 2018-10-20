/// <reference path="./user.ts" />

console.log(UserModule.name);

import addr = UserModule.AddressModule;
console.log(addr.zip);
