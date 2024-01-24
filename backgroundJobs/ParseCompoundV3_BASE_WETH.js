const Addresses = require("./Addresses.js")
const CompoundV3 = require("./CompoundV3Parser")
const Web3 = require("web3")
require('dotenv').config()

class CompoundV3BASEWETHParser extends CompoundV3 {
  constructor() {
    const compoundInfo = Addresses.compoundV3Address['BASE']['WETH']
    const network = 'BASE'
    const web3 = new Web3(process.env.BASE_NODE_URL)
    super(compoundInfo, network, web3, 24 * 5)
  }
}

module.exports = { Parser: CompoundV3BASEWETHParser }

async function test() {

  const comp = new CompoundV3BASEWETHParser()
  await comp.main()
}

// test()
