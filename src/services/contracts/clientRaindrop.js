const clientRaindrop = {
  address: '0x6EaF0DAA157334Ea03eCC2E6E2839541d29b0673',
  abi:[{"inputs":[{"internalType":"address","name":"snowflakeAddress","type":"address"},{"internalType":"address","name":"oldClientRaindropAddress","type":"address"},{"internalType":"uint256","name":"_hydroStakeUser","type":"uint256"},{"internalType":"uint256","name":"_hydroStakeDelegatedUser","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"ein","type":"uint256"},{"indexed":false,"internalType":"string","name":"hydroID","type":"string"},{"indexed":false,"internalType":"address","name":"userAddress","type":"address"}],"name":"HydroIDClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"ein","type":"uint256"},{"indexed":false,"internalType":"string","name":"hydroID","type":"string"},{"indexed":false,"internalType":"address","name":"userAddress","type":"address"}],"name":"HydroIDDestroyed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":true,"inputs":[],"name":"callOnAddition","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"callOnRemoval","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"casedHydroID","type":"string"},{"internalType":"address","name":"_address","type":"address"}],"name":"checkForOldHydroID","outputs":[],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"uncasedHydroID","type":"string"}],"name":"getDetails","outputs":[{"internalType":"uint256","name":"ein","type":"uint256"},{"internalType":"address","name":"_address","type":"address"},{"internalType":"string","name":"casedHydroID","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getDetails","outputs":[{"internalType":"uint256","name":"ein","type":"uint256"},{"internalType":"string","name":"casedHydroID","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"ein","type":"uint256"}],"name":"getDetails","outputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"string","name":"casedHydroID","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"uncasedHydroID","type":"string"}],"name":"hydroIDActive","outputs":[{"internalType":"bool","name":"active","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"uncasedHydroID","type":"string"}],"name":"hydroIDAvailable","outputs":[{"internalType":"bool","name":"available","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"uncasedHydroID","type":"string"}],"name":"hydroIDDestroyed","outputs":[{"internalType":"bool","name":"destroyed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"hydroStakeDelegatedUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"hydroStakeUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"ein","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"extraData","type":"bytes"}],"name":"onAddition","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"ein","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onRemoval","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"oldClientRaindropAddress","type":"address"}],"name":"setOldClientRaindropAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"snowflakeAddress","type":"address"}],"name":"setSnowflakeAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_hydroStakeUser","type":"uint256"},{"internalType":"uint256","name":"_hydroStakeDelegatedUser","type":"uint256"}],"name":"setStakes","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"string","name":"casedHydroId","type":"string"}],"name":"signUp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"snowflakeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"snowflakeDescription","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"snowflakeName","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
};

export default clientRaindrop;
