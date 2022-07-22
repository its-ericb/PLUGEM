import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'PLUGEM',
  tokenName: 'PLUGEM',
  tokenSymbol: 'PLUG',
  hiddenMetadataUri: 'ipfs://QmaXvDghW67uuCtcpYtxCubK3v9MsUFbynrcaausZU96tY/hidden.json',
  maxSupply: 69,
  whitelistSale: {
    price: 0.03,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.03,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.03,
    maxMintAmountPerTx: 10,
  },
  contractAddress: "0x0b52c66a339dd33324cac0f3c473d95e30498008",
  marketplaceIdentifier: 'PLUGEM',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
