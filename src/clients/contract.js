let web3
let KittensContract
let kittensContractInstance

export function getKittensContract() {
  if (KittensContract) return KittensContract
  _initContract()
  return KittensContract
}

export function getKittensContractInstance() {
  if (kittensContractInstance) return kittensContractInstance
  _initContract()
  return kittensContractInstance
}

function _initContract() {
  _initWeb3()
  KittensContract = window.web3.eth.contract(JSON.parse(process.env.REACT_APP_KITTENS_CONTRACT_ABI))
  kittensContractInstance = KittensContract.at(process.env.REACT_APP_KITTENS_CONTRACT_ADDRESS)
}

function _initWeb3() {
  if (web3) return web3
  if (!window.web3) {
    throw new Error('Web3 not found')
  }
  web3 = new window.Web3(window.web3.currentProvider)
}
