type CustomMap = {
    [key: string]: string;
};
interface GenerateHashOptions {
    map?: CustomMap;
}

declare function generateHash(dbid: number, options?: GenerateHashOptions): string;

export { generateHash };
