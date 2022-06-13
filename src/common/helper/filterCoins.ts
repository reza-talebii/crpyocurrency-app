import { ICoin } from "../interfaces/crypto";

export const filterCoins = (coins: ICoin[], searchTerm: string): ICoin[] => {
  const filteredCryptos = coins?.filter(
    (coin: ICoin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return filteredCryptos;
};
