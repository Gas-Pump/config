/// <reference path="../node_modules/@vechain/connex-types/index.d.ts" />

export type Address = `0x${string}`;

export const chainIds = [100009, 100010, 100011] as const;

export type ChainId = (typeof chainIds)[number];
// ^ 100009 = production, 100010 = staging, 100011 = development

export type DexName = "verocket" | "vexchange";

export type Dex = {
  /** DEX name. */
  name: DexName;
  /** WETH contract address. */
  weth: Address;
  /** UniV2 router contract address. */
  routerV2: Address;
  /** WETH-VTHO pair contract address. */
  pairWETH_VTHO: Address;
  /** WETH-B3TR pair contract address. */
  pairWETH_B3TR?: Address;
};

export type TokenName = "vtho" | "b3tr";

export type Token = {
  name: TokenName;
  address: Address;
  decimals: number;
};

/**
 * JavaScript CAIP-2 representation object.
 * @see https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md
 */
export type ChainData = {
  name: string;
  chain: string;
  network: "main" | "test" | Connex.Thor.Block; // TODO: add support for devnet
  rpc: string[];
  faucets: string[];
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  infoURL: string;
  shortName: string;
  chainId: ChainId;
  networkId: number;
  icon?: string;
  explorers: {
    name: string;
    url: string;
    icon?: string;
    standard: string;
  }[];
  /** List of whitelisted tokens. */
  tokens: Token[];
  /** List of supported DEXs. */
  dexs: Dex[];
  /** Gas Pump contract address. */
  gasPump: Address;
  /** Delegate tx endpoint. */
  delegateTxEndpoint: string;
};

const mainChain: ChainData = {
  name: "VeChain",
  chain: "VeChain",
  network: "main",
  rpc: [
    "https://mainnet.veblocks.net",
    "https://mainnetc2.vechain.network",
    "https://mainnetc1.vechain.network",
  ],
  faucets: [],
  nativeCurrency: {
    name: "VeChain",
    symbol: "VET",
    decimals: 18,
  },
  infoURL: "https://vechain.org",
  shortName: "vechain",
  chainId: 100009,
  networkId: 100009,
  explorers: [
    {
      name: "VeChain Stats",
      url: "https://vechainstats.com",
      standard: "none",
    },
    {
      name: "VeChain Explorer",
      url: "https://explore.vechain.org",
      standard: "none",
    },
  ],
  tokens: [
    {
      name: "vtho",
      address: "0x0000000000000000000000000000456E65726779",
      decimals: 18,
    },
    {
      name: "b3tr",
      address: "0x5ef79995FE8a89e0812330E4378eB2660ceDe699",
      decimals: 18,
    },
  ],
  dexs: [
    {
      name: "verocket",
      weth: "0x45429a2255e7248e57fce99e7239aed3f84b7a53", // ✅
      routerV2: "0x576da7124c7bb65a692d95848276367e5a844d95", // ✅
      pairWETH_VTHO: "0x29a996b0ebb7a77023d091c9f2ca34646bea6ede", // ✅
      pairWETH_B3TR: "0xb2e4fc26e1ce8bd223559b4e82c4c136c4051277", //
    },
    {
      name: "vexchange",
      weth: "0xd8ccdd85abdbf68dfec95f06c973e87b1b5a9997", // ✅
      routerV2: "0x6c0a6e1d922e0e63901301573370b932ae20dadb", // ✅
      pairWETH_VTHO: "0x2b6fc877ff5535b50f6c3e068bb436b16ec76fc5", // ✅
      // pairWETH_B3TR: "", // B3TR-WETH is not on Vexchange!
    },
  ],
  gasPump: "0xff3C6dABd0DCaF77363d59fDBC52939073f88014",
  delegateTxEndpoint: "",
};

const testChain: ChainData = {
  name: "VeChain Testnet",
  chain: "VeChain",
  network: "test",
  rpc: [
    "https://testnet.veblocks.net",
    "https://vethor-node-test.vechaindev.com",
    "https://testnetc1.vechain.network",
  ],
  faucets: ["https://faucet.vecha.in"],
  nativeCurrency: {
    name: "VeChain",
    symbol: "VET",
    decimals: 18,
  },
  infoURL: "https://vechain.org",
  shortName: "vechain-testnet",
  chainId: 100010,
  networkId: 100010,
  explorers: [
    {
      name: "VeChain Explorer",
      url: "https://explore-testnet.vechain.org",
      standard: "none",
    },
  ],
  tokens: [
    {
      name: "vtho",
      address: "0x0000000000000000000000000000456E65726779",
      decimals: 18,
    },
    {
      name: "b3tr",
      address: "0xf2446638933DbAEDcAb2D9Dc6A9D388159c3F16B", // MKT
      decimals: 18,
    },
  ],
  dexs: [
    {
      name: "verocket",
      weth: "0x86fb5343bbecffc86185c023a2a6ccc76fc0afd8",
      routerV2: "0x91e42759290239a62ac757cf85bb5b74ace57927",
      pairWETH_VTHO: "0x1e5e9a6540b15a3efa8d4e8fadb82cc8e0e167ca",
      // pairWETH_B3TR: "", //
    },
    {
      name: "vexchange",
      weth: "0x93e5fa8011612fab061ef58cbab9262d2e76407b",
      routerV2: "0x01d6b50b31c18d7f81ede43935cadf79901b0ea0",
      pairWETH_VTHO: "0x68139e121b1884c5055325d4bdc6ae7c9b000bd0",
      // pairWETH_B3TR: "", //
    },
  ],
  gasPump: "0xeb291A5F6D93A671c7CaBdB0A78c7D45320776bb",
  delegateTxEndpoint: "https://handletxsignature-44hbcfrmlq-uc.a.run.app",
};

/**
 * @link https://github.com/ethereum-lists/chains
 */
export const chains: Record<ChainId, ChainData> = {
  100009: mainChain,
  100010: testChain,
  100011: {
    ...testChain,
    delegateTxEndpoint:
      "http://127.0.0.1:5001/gaspumpdev/us-central1/delegategaspump",
  },
};

export function getChainData(chainId: ChainId): ChainData {
  return chains[chainId];
}
