export interface Phones {
    article: number;
    image: string;
    name: string;
    manufacturer: string;
    releaseYear: string;
    diagonal: string;
    countryOfOrigin: string;
    memoryCapacity: string;
    screenRefreshRate: string;
    nfc: boolean;
    eSIMSupport: boolean;
    supportWirelessCharging: boolean;
    price: number;
}
export type RemainsPhones = Phones | undefined