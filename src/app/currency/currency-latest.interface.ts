export interface ICurrencyLatest {
  base: string;
  date: string
  rates: {
    [key: string]: number;
  };
};
