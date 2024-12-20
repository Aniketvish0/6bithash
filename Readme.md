# 6bithash 

**Hash function package** for hashing id's ( in positive integer ) to an alphanumeric short string using a 6 bit map ( User can also prvide thier own Custom 6 bit map ) 

I built this to solve the problem of getting short hash for numbers ( i was making a link shortner )

This is Made Using *TypeScript and Node.js*

## How to use


### Install with npm

```bash
npm install 6bithash
```

### Install with pnpm
```bash
pnpm add 6bithash
```

Then, you can import the hash function as :

```js
import { generateHash } from '6bithash';
```
or

```js
const { generateHash } = require('6bithash');
```
### Providing a custom hash function

The custom hash function must have key as 6bit integers and value as you want as a string. 

Example: 
```js
import { generateHash } from '6bithash';
myMap = {
    "000000" : "u",
    ...
    ...
    "111111" : "o",
}
const Number = 1001;
const result = generateHash(Number,{myMap});
```

### Note

- The minimum number of characters in a string hash depends on the how big the number is.
- Pass a larger number as a Argument to get a hash with more characters.
- If you are using **TypeScript** the result type is string.

Example: 

**Javascript :** 
```js
const result = generateHash(959492);
console.log(result); // result = dQqe
```
**TypeScript :**
```ts
const result:string = generateHash(959492);
console.log(result); // result = dQqe
```

## File Structure

    6bithash
    ├── dist
    │ └── index.d.mts
    │ └── index.d.ts
    │ └── index.js
    │ └── index.mjs
    ├── src
    │ └── customMap.ts
    │ └── index.ts
    │ └── types.ts
    ├── tests
    │ └── index.test.ts
    ├── .gitignore
    ├── License
    ├── pnpm-lock.yaml
    ├── package.json
    ├── jest.config.json
    ├── Readme.md
    └── tsconfig.json
    └── tsup.config.json

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---