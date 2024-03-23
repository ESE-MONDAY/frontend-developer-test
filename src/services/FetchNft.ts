import { Metaplex, PublicKey } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl } from "@solana/web3.js";

const fetchNFTService = async () => {
  try {
    const connection = new Connection(clusterApiUrl("mainnet-beta"));
    const metaplex = new Metaplex(connection);

    const mintAddress = new PublicKey("84RSSrVEpb8VhSgt58j7mBwwQA38copF4tgRdpn9griy");
    const nfts = await metaplex.nfts().findByMint({ mintAddress });
    if (nfts !== null) {
      return nfts;
    } else {
      console.error("Error fetching NFTs: Response is null");
      return null; 
    }
  } catch (error) {
    console.error("Error fetching NFTs:", error);
    throw error; 
  }
}

export default fetchNFTService;
