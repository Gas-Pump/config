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
  /** VTHO contract address. */
  vtho: Address;
  /** B3TR contract address. */
  b3tr: Address;
  /** List of supported DEXs. */
  dexs: Dex[];
  /** VexWrapper contract address. */
  vexWrapper: Address;
  /** Relayer contract address. */
  relayer: Address;
  /** Register events endpoint. */
  handleTxSignatureEndpoint: string;
  /** Endpoint to fetch latest block number. */
  // getHeadEndpoint: string;
  // setHeadEndpoint: string;
  // getUserSwapsEndpoint: string;
  // getUserStatsEndpoint: string;
  // getTradesForecastEndpoint: string;
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
  vtho: "0x0000000000000000000000000000456E65726779",
  b3tr: "0x5ef79995FE8a89e0812330E4378eB2660ceDe699",
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
  vexWrapper: "0x3c3847A92B57A3163d26cc2eb22F53b33BaA34D8",
  relayer: "0xff3C6dABd0DCaF77363d59fDBC52939073f88014",
  // getHeadEndpoint: "https://gethead-umgsnyajoq-uc.a.run.app",
  // setHeadEndpoint: "https://sethead-umgsnyajoq-uc.a.run.app",
  handleTxSignatureEndpoint: "",
  // getUserSwapsEndpoint: "https://getuserswaps-umgsnyajoq-uc.a.run.app",
  // getUserStatsEndpoint: "https://getuserstats-umgsnyajoq-uc.a.run.app",
  // getTradesForecastEndpoint: "https://gettradesforecast-umgsnyajoq-uc.a.run.app",
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
  vtho: "0x0000000000000000000000000000456E65726779",
  b3tr: "0xbf64cf86894Ee0877C4e7d03936e35Ee8D8b864F",
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
  vexWrapper: "0x0bb72c2423cff281E9e7aa49b0ebb3a2D3280603",
  relayer: "0xB9704e77504333774Df3D84F01a984d1c5DC1B34",
  // getHeadEndpoint: "https://gethead-3co32ksh6a-uc.a.run.app",
  // setHeadEndpoint: "https://sethead-3co32ksh6a-uc.a.run.app",
  handleTxSignatureEndpoint: "",
  // getUserSwapsEndpoint: "https://getuserswaps-3co32ksh6a-uc.a.run.app",
  // getUserStatsEndpoint: "https://getuserstats-3co32ksh6a-uc.a.run.app",
  // getTradesForecastEndpoint:
  //   "https://gettradesforecast-3co32ksh6a-uc.a.run.app",
};

/**
 * @link https://github.com/ethereum-lists/chains
 */
export const chains: Record<ChainId, ChainData> = {
  100009: mainChain,
  100010: testChain,
  100011: {
    ...testChain,
    // getHeadEndpoint: "",
    // setHeadEndpoint: "http://127.0.0.1:5001/vefarmdev/us-central1/sethead",
    handleTxSignatureEndpoint:
      "http://127.0.0.1:5001/gaspumpdev/us-central1/handletxsignature",
  },
};

export function getChainData(chainId: ChainId): ChainData {
  return chains[chainId];
}
