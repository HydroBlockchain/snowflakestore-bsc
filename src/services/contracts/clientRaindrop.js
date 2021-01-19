const clientRaindrop = {
  address: '0x8dB5563B2C5F2951B884000615f4426e9faDf6B1',
  abi:[{"constant":true,"inputs":[{"name":"uncasedHydroID","type":"string"}],"name":"getDetails","outputs":[{"name":"ein","type":"uint256"},{"name":"_address","type":"address"},{"name":"casedHydroID","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_address","type":"address"}],"name":"getDetails","outputs":[{"name":"ein","type":"uint256"},{"name":"casedHydroID","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"hydroStakeUser","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"hydroStakeDelegatedUser","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"callOnAddition","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"snowflakeDescription","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"oldClientRaindropAddress","type":"address"}],"name":"setOldClientRaindropAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"snowflakeName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"callOnRemoval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ein","type":"uint256"},{"name":"","type":"uint256"},{"name":"extraData","type":"bytes"}],"name":"onAddition","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"ein","type":"uint256"},{"name":"","type":"bytes"}],"name":"onRemoval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"casedHydroID","type":"string"},{"name":"_address","type":"address"}],"name":"checkForOldHydroID","outputs":[],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"uncasedHydroID","type":"string"}],"name":"hydroIDActive","outputs":[{"name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"uncasedHydroID","type":"string"}],"name":"hydroIDAvailable","outputs":[{"name":"available","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"casedHydroId","type":"string"}],"name":"signUp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ein","type":"uint256"}],"name":"getDetails","outputs":[{"name":"_address","type":"address"},{"name":"casedHydroID","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_hydroStakeUser","type":"uint256"},{"name":"_hydroStakeDelegatedUser","type":"uint256"}],"name":"setStakes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"snowflakeAddress","type":"address"}],"name":"setSnowflakeAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"uncasedHydroID","type":"string"}],"name":"hydroIDDestroyed","outputs":[{"name":"destroyed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"snowflakeAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"snowflakeAddress","type":"address"},{"name":"oldClientRaindropAddress","type":"address"},{"name":"_hydroStakeUser","type":"uint256"},{"name":"_hydroStakeDelegatedUser","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"ein","type":"uint256"},{"indexed":false,"name":"hydroID","type":"string"},{"indexed":false,"name":"userAddress","type":"address"}],"name":"HydroIDClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"ein","type":"uint256"},{"indexed":false,"name":"hydroID","type":"string"},{"indexed":false,"name":"userAddress","type":"address"}],"name":"HydroIDDestroyed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]
};

export default clientRaindrop;
