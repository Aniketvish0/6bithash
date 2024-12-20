import { generateHash } from '../src/index';

const myMap = {
  '000000': 'j', '000001': 'k', '000010': 'l', '000011': 'm', '000100': 'N', '000101': 'O',
  '000110': 'j', '000111': 'k', '001000': 'l', '001001': 'm', '001010': 'N', '001011': 'O',
  '001100': 'j', '001101': 'k', '001110': 'l', '001111': 'm', '010000': 'N', '010001': 'O',
  '010010': 'j', '010011': 'k', '010100': 'l', '010101': 'm', '010110': 'N', '010111': 'O',
  '011000': 'j', '011001': 'k', '011010': 'l', '011011': 'm', '011100': 'N', '011101': 'O',
  '011110': 'j', '011111': 'k', '100000': 'l', '100001': 'm', '100010': 'N', '100011': 'O',
  '100100': 'j', '100101': 'k', '100110': 'l', '100111': 'm', '101000': 'N', '101001': 'O',
  '101010': 'j', '101011': 'k', '101100': 'l', '101101': 'm', '101110': 'N', '101111': 'O',
  '110000': 'j', '110001': 'k', '110010': 'l', '110011': 'm', '110100': 'N', '110101': 'O',
  '110110': 'j', '110111': 'k', '111000': 'l', '111001': 'm', '111010': 'N', '111011': 'O',
  '111100': 'j', '111101': 'k', '111110': 'l', '111111': 'm' 
};
describe('generateHash', () => {
  it('should generate a correct hash for a valid dbid', () => {
    const hash = generateHash(79); 
    expect(hash).toBe('bp'); 
  });

  it('should throw an error for negative numbers', () => {
    expect(() => generateHash(-1)).toThrow('Input must be a non-negative integer.');
  });
  it('should genrate a correct hash as per the user map', () => {
    const hash = generateHash(959492,{myMap}); 
    expect(hash).toBe('mjNN'); 
  });
});
