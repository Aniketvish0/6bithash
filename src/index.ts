import { customMap } from "./customMap";
import { GenerateHashOptions } from "./types"
export function generateHash(dbid: number , options : GenerateHashOptions = {}): string {
    const { map = customMap } = options;

    if (dbid < 0 || !Number.isInteger(dbid)) {
      throw new Error('Input must be a non-negative integer.');
    }
  
    let binary = dbid.toString(2);
    const padding = '0'.repeat((6 - (binary.length % 6)) % 6);
    binary = padding + binary;
  
    const chunks = binary.match(/.{1,6}/g);
    if (!chunks) {
      throw new Error('Failed to split binary string into chunks.');
    }
  
    const hash = chunks.map(chunk => {
      if (!(chunk in map)) {
        throw new Error(`Mapping not found for binary chunk: ${chunk}`);
      }
      return map[chunk];
    }).join('');
  
    return hash;
  }