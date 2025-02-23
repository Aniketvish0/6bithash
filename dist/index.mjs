// src/customMap.ts
var customMap = {
  "000000": "a",
  "000001": "b",
  "000010": "c",
  "000011": "d",
  "000100": "e",
  "000101": "f",
  "000110": "g",
  "000111": "h",
  "001000": "i",
  "001001": "j",
  "001010": "k",
  "001011": "l",
  "001100": "m",
  "001101": "n",
  "001110": "o",
  "001111": "p",
  "010000": "q",
  "010001": "r",
  "010010": "s",
  "010011": "t",
  "010100": "u",
  "010101": "v",
  "010110": "w",
  "010111": "x",
  "011000": "y",
  "011001": "z",
  "011010": "A",
  "011011": "B",
  "011100": "C",
  "011101": "D",
  "011110": "E",
  "011111": "F",
  "100000": "G",
  "100001": "H",
  "100010": "I",
  "100011": "J",
  "100100": "K",
  "100101": "L",
  "100110": "M",
  "100111": "N",
  "101000": "O",
  "101001": "P",
  "101010": "Q",
  "101011": "R",
  "101100": "S",
  "101101": "T",
  "101110": "U",
  "101111": "V",
  "110000": "W",
  "110001": "X",
  "110010": "Y",
  "110011": "Z",
  "110100": "0",
  "110101": "1",
  "110110": "2",
  "110111": "3",
  "111000": "4",
  "111001": "5",
  "111010": "6",
  "111011": "7",
  "111100": "8",
  "111101": "9",
  "111110": "8",
  "111111": "9"
};

// src/index.ts
function generateHash(dbid, options = {}) {
  const { myMap = customMap } = options;
  if (dbid < 0 || !Number.isInteger(dbid)) {
    throw new Error("Input must be a non-negative integer.");
  }
  let binary = dbid.toString(2);
  const padding = "0".repeat((6 - binary.length % 6) % 6);
  binary = padding + binary;
  const chunks = binary.match(/.{1,6}/g);
  if (!chunks) {
    throw new Error("Failed to split binary string into chunks.");
  }
  const hash = chunks.map((chunk) => {
    if (!(chunk in myMap)) {
      throw new Error(`Mapping not found for binary chunk: ${chunk}`);
    }
    return myMap[chunk];
  }).join("");
  return hash;
}
export {
  generateHash
};
