export interface Coins {
    id: string;
    symbol: string;
    name: string;
}

export interface CoinsDetails{
    id: string;
    symbol: string;
    name: string;
    image: {
      thumb: string;
      small: string;
      large: string;
    };
}