const snowflake = {
  address: '0xE2BB33e4Fd6000598E471121e8f7eD91bAB08291',
  abi: [{"inputs":[{"internalType":"address","name":"_identityRegistryAddress","type":"address"},{"internalType":"address","name":"_hydroTokenAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"einFrom","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SnowflakeBalanceBurnt","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"uint256","name":"einTo","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SnowflakeDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"ein","type":"uint256"},{"indexed":true,"internalType":"address","name":"resolver","type":"address"},{"indexed":false,"internalType":"uint256","name":"currentAllowance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"requestedWithdraw","type":"uint256"}],"name":"SnowflakeInsufficientAllowance","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"ein","type":"uint256"},{"indexed":false,"internalType":"address[]","name":"newProviders","type":"address[]"},{"indexed":false,"internalType":"address[]","name":"oldProviders","type":"address[]"},{"indexed":false,"internalType":"address","name":"approvingAddress","type":"address"}],"name":"SnowflakeProvidersUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"ein","type":"uint256"},{"indexed":true,"internalType":"address","name":"resolver","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdrawAllowance","type":"uint256"}],"name":"SnowflakeResolverAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"ein","type":"uint256"},{"indexed":true,"internalType":"address","name":"resolver","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdrawAllowance","type":"uint256"}],"name":"SnowflakeResolverAllowanceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"ein","type":"uint256"},{"indexed":true,"internalType":"address","name":"resolver","type":"address"}],"name":"SnowflakeResolverRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"einFrom","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"einTo","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SnowflakeTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"resolverFrom","type":"address"}],"name":"SnowflakeTransferFrom","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"resolverFrom","type":"address"},{"indexed":true,"internalType":"uint256","name":"einTo","type":"uint256"}],"name":"SnowflakeTransferFromVia","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"resolverFrom","type":"address"},{"indexed":true,"internalType":"address","name":"via","type":"address"},{"indexed":true,"internalType":"uint256","name":"einTo","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SnowflakeTransferToVia","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"einFrom","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SnowflakeWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"resolverFrom","type":"address"}],"name":"SnowflakeWithdrawFrom","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"resolverFrom","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"SnowflakeWithdrawFromVia","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"resolverFrom","type":"address"},{"indexed":true,"internalType":"address","name":"via","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"SnowflakeWithdrawToVia","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"approvingAddress","type":"address"},{"internalType":"address[]","name":"providers","type":"address[]"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"addProvidersFor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"resolver","type":"address"},{"internalType":"bool","name":"isSnowflake","type":"bool"},{"internalType":"uint256","name":"withdrawAllowance","type":"uint256"},{"internalType":"bytes","name":"extraData","type":"bytes"}],"name":"addResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"ein","type":"uint256"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"bool","name":"isSnowflake","type":"bool"},{"internalType":"uint256","name":"withdrawAllowance","type":"uint256"},{"internalType":"bytes","name":"extraData","type":"bytes"}],"name":"addResolverAsProvider","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"approvingAddress","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"bool","name":"isSnowflake","type":"bool"},{"internalType":"uint256","name":"withdrawAllowance","type":"uint256"},{"internalType":"bytes","name":"extraData","type":"bytes"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"addResolverFor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"destination","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"allowAndCall","outputs":[{"internalType":"bytes","name":"returnData","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"destination","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"address","name":"approvingAddress","type":"address"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"allowAndCallDelegated","outputs":[{"internalType":"bytes","name":"returnData","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address[]","name":"resolvers","type":"address[]"},{"internalType":"uint256[]","name":"withdrawAllowances","type":"uint256[]"}],"name":"changeResolverAllowances","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"approvingAddress","type":"address"},{"internalType":"address[]","name":"resolvers","type":"address[]"},{"internalType":"uint256[]","name":"withdrawAllowances","type":"uint256[]"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"changeResolverAllowancesDelegated","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"clientRaindropAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recoveryAddress","type":"address"},{"internalType":"address","name":"associatedAddress","type":"address"},{"internalType":"address[]","name":"providers","type":"address[]"},{"internalType":"string","name":"casedHydroId","type":"string"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"createIdentityDelegated","outputs":[{"internalType":"uint256","name":"ein","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"deposits","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"hydroTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"identityRegistryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"bytes","name":"_bytes","type":"bytes"}],"name":"receiveApproval","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"approvingAddress","type":"address"},{"internalType":"address[]","name":"providers","type":"address[]"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"removeProvidersFor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"resolver","type":"address"},{"internalType":"bool","name":"isSnowflake","type":"bool"},{"internalType":"bytes","name":"extraData","type":"bytes"}],"name":"removeResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"approvingAddress","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"bool","name":"isSnowflake","type":"bool"},{"internalType":"bytes","name":"extraData","type":"bytes"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"removeResolverFor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"resolverAllowances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_identityRegistryAddress","type":"address"},{"internalType":"address","name":"_hydroTokenAddress","type":"address"}],"name":"setAddresses","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_clientRaindropAddress","type":"address"}],"name":"setClientRaindropAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"signatureNonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"signatureTimeout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"einTo","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferSnowflakeBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"einFrom","type":"uint256"},{"internalType":"uint256","name":"einTo","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferSnowflakeBalanceFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"einFrom","type":"uint256"},{"internalType":"address","name":"via","type":"address"},{"internalType":"uint256","name":"einTo","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"_bytes","type":"bytes"}],"name":"transferSnowflakeBalanceFromVia","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"approvingAddress","type":"address"},{"internalType":"address","name":"newRecoveryAddress","type":"address"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"triggerRecoveryAddressChangeFor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"approvingAddress","type":"address"},{"internalType":"address[]","name":"newProviders","type":"address[]"},{"internalType":"address[]","name":"oldProviders","type":"address[]"},{"internalType":"uint8[2]","name":"v","type":"uint8[2]"},{"internalType":"bytes32[2]","name":"r","type":"bytes32[2]"},{"internalType":"bytes32[2]","name":"s","type":"bytes32[2]"},{"internalType":"uint256[2]","name":"timestamp","type":"uint256[2]"}],"name":"upgradeProvidersFor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawSnowflakeBalance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"einFrom","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawSnowflakeBalanceFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"einFrom","type":"uint256"},{"internalType":"address","name":"via","type":"address"},{"internalType":"address payable","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"_bytes","type":"bytes"}],"name":"withdrawSnowflakeBalanceFromVia","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
};

export default snowflake;
