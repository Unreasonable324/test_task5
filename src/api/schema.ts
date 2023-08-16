export type article = number | "duplicate"

export interface Phone {
    article: article;
    image: string | "duplicate";
    name: string | "duplicate";
    manufacturer: string | "duplicate";
    releaseYear: string | "duplicate";
    diagonal: string | "duplicate";
    countryOfOrigin: string | "duplicate";
    memoryCapacity: string | "duplicate";
    screenRefreshRate: string | "duplicate";
    nfc: boolean | "duplicate";
    eSIMSupport: boolean | "duplicate";
    supportWirelessCharging: boolean | "duplicate";
    price: number | "duplicate";
}