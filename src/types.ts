// types.ts
export interface Country {
  name: {
    common: string;
    official: string;
  };
  cca3: string;
  region: string;
  subregion: string;
  population: number;
}
