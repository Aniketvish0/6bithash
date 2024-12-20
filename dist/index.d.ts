type CustomMap = {
    [key: string]: string;
};
interface GenerateHashOptions {
    myMap?: CustomMap;
}

declare function generateHash(dbid: number, options?: GenerateHashOptions): string;

export { generateHash };
