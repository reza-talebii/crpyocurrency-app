import { Coin } from "../interfaces/crypto";

export const filterCoins = (coins: Coin[], searchTerm: string): Coin[] => {
  const filteredCryptos = coins?.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return filteredCryptos;
};
