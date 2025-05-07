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

export type TokenSymbol =
  | "VET"
  | "VTHO"
  | "B3TR"
  | "USDGLO"
  | "HAI"
  | "SHA"
  | "VEED"
  | "YEET"
  | "WOV"
  | "VEUSD"
  | "SHT"
  | "WVET"
  | "MVA"
  | "VEX"
  | "VPU"
  | "GOLD"
  | "JUR"
  | "MVG"
  | "VVET"
  | "VSEA"
  | "OCE"
  | "PLA"
  | "DBET"
  | "EHRT"
  | "BVET"
  | "SQUAD"
  | "SASS";

export type Token = {
  symbol: TokenSymbol;
  name: string;
  address: Address;
  decimals: number;
  // icon: any;
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
      symbol: "VET",
      name: "VeChain",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      // icon: vetIcon,
    },
    {
      symbol: "VTHO",
      name: "VeThor",
      address: "0x0000000000000000000000000000456E65726779",
      decimals: 18,
      // icon: vthoIcon,
    },
    {
      symbol: "B3TR",
      name: "B3TR",
      address: "0x5ef79995FE8a89e0812330E4378eB2660ceDe699",
      decimals: 18,
      // icon: b3trIcon,
    },
    {
      symbol: "USDGLO",
      name: "Glo Dollar",
      address: "0x29c630cCe4DdB23900f5Fe66Ab55e488C15b9F5e",
      decimals: 18,
      // icon: usdgloIcon,
    },
    {
      symbol: "HAI",
      name: "Hacken",
      address: "0xaCc280010B2EE0efc770BCE34774376656D8cE14",
      decimals: 8,
      // icon: haiIcon,
    },
    {
      symbol: "SHA",
      name: "Safe Haven",
      address: "0x5db3C8A942333f6468176a870dB36eEf120a34DC",
      decimals: 18,
      // icon: shaIcon,
    },
    {
      symbol: "VEED",
      name: "VEED Token",
      address: "0x67fD63f6068962937EC81AB3Ae3bF9871E524FC9",
      decimals: 18,
      // icon: veedIcon,
    },
    {
      symbol: "YEET",
      name: "Yeet Coin",
      address: "0xae4C53b120cba91a44832f875107cbc8FbEe185C",
      decimals: 18,
      // icon: yeetIcon,
    },
    {
      symbol: "WOV",
      name: "WorldOfV",
      address: "0x170F4BA8e7ACF6510f55dB26047C83D13498AF8A",
      decimals: 18,
      // icon: wovIcon,
    },
    {
      symbol: "VEUSD",
      name: "VeUSD",
      address: "0x4E17357053dA4b473e2daa2c65C2c949545724b8",
      decimals: 6,
      // icon: veusdIcon,
    },
    {
      symbol: "SHT",
      name: "SHT Coin",
      address: "0x9AF004570f2a301D99F2cE4554E564951eE48e3c",
      decimals: 18,
      // icon: shtIcon,
    },
    {
      symbol: "WVET",
      name: "Wrapped VET",
      address: "0xD8CCDD85abDbF68DFEc95f06c973e87B1b5A9997",
      decimals: 18,
      // icon: wvetIcon,
    },
    {
      symbol: "MVA",
      name: "MVA Token",
      address: "0xC3Fd50A056dc4025875FA164CED1524C93053F29",
      decimals: 18,
      // icon: mvaIcon,
    },
    {
      symbol: "VEX",
      name: "Vexchange",
      address: "0x0BD802635eb9cEB3fCBe60470D2857B86841aab6",
      decimals: 18,
      // icon: vexIcon,
    },
    {
      symbol: "VPU",
      name: "VPunks Token",
      address: "0xb0821559723dB89e0Bd14FEE81E13a3aaE007e65",
      decimals: 18,
      // icon: vpuIcon,
    },
    {
      symbol: "GOLD",
      name: "GOLD Token",
      address: "0xFF3BC357600885aAA97506ea6e24fB21abA88fbD",
      decimals: 18,
      // icon: goldIcon,
    },
    {
      symbol: "JUR",
      name: "Jur",
      address: "0x46209D5e5a49C1D403F4Ee3a0A88c3a27E29e58D",
      decimals: 18,
      // icon: jurIcon,
    },
    {
      symbol: "MVG",
      name: "Mad Viking Games",
      address: "0x99763494A7B545f983ee9Fe02a3b5441c7EF1396",
      decimals: 18,
      // icon: mvgIcon,
    },
    {
      symbol: "VVET",
      name: "Veiled VET",
      address: "0x45429A2255e7248e57fce99E7239aED3f84B7a53",
      decimals: 18,
      // icon: vvetIcon,
    },
    {
      symbol: "VSEA",
      name: "VeSea",
      address: "0x23368c20C16F64ecbb30164a08666867Be22F216",
      decimals: 18,
      // icon: vseaIcon,
    },
    {
      symbol: "OCE",
      name: "OceanEx",
      address: "0x0CE6661b4ba86a0EA7cA2Bd86a0De87b0B860F14",
      decimals: 18,
      // icon: oceIcon,
    },
    {
      symbol: "PLA",
      name: "Plair",
      address: "0x89827F7bB951Fd8A56f8eF13C5bFEE38522F2E1F",
      decimals: 18,
      // icon: plaIcon,
    },
    {
      symbol: "DBET",
      name: "DecentBet",
      address: "0x1b8EC6C2A45ccA481Da6F243Df0d7A5744aFc1f8",
      decimals: 18,
      // icon: dbetIcon,
    },
    {
      symbol: "EHRT",
      name: "8Hours Token",
      address: "0xf8e1fAa0367298b55F57Ed17F7a2FF3F5F1D1628",
      decimals: 18,
      // icon: ehrtIcon,
    },
    {
      symbol: "BVET",
      name: "BetterSwap VET",
      address: "0xf9b02b47694fd635A413F16dC7B38aF06Cc16fe5",
      decimals: 18,
      // icon: bvetIcon,
    },
    {
      symbol: "SQUAD",
      name: "Squad Token",
      address: "0xB27a1Fb87935B85CDaA2E16468247278C74C5ec7",
      decimals: 18,
      // icon: squadIcon,
    },
    {
      symbol: "SASS",
      name: "SASS",
      address: "0x84B0cAF6436AacE4e21D10f126963FDd53aC31eA",
      decimals: 18,
      // icon: sassIcon,
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
  delegateTxEndpoint: "https://delegategaspump-675g7uoq5a-uc.a.run.app",
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
  tokens: mainChain.tokens.map((t) =>
    ["VET", "VTHO"].includes(t.symbol)
      ? { ...t }
      : {
          ...t,
          address: "0xf2446638933DbAEDcAb2D9Dc6A9D388159c3F16B", // MKT
        },
  ),
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
  gasPump: "0x0E62aE268f1bb80c155A7211015404D43DF5B743",
  delegateTxEndpoint: "https://delegategaspump-44hbcfrmlq-uc.a.run.app",
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
