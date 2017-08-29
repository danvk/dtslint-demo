// TypeScript Version: 2.1

interface Utils {
  map<T, U>(xs: T[], fn: (x: T) => U): U[];
}

declare const utils: Utils;
export = utils;
