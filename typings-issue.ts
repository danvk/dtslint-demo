import * as _ from 'underscore';

const objs = [{x: 1, y: 2}, {x: 2, y: 3}];
const xs = _.pluck(objs, 'x');
// xs's type is any[] but it should be number[]

interface Point { x: number; y: number; name: string; }
const pt1: Point = {x: 1, y: 2, name: 'pt1'};
const pt2: Point = {x: 2, y: 3, name: 'pt2'};
const vs = [pt1, pt2, pt1, pt2];
const byName = _.chain(vs).unique().groupBy(pt => pt.name).value();
// ptByName's type is Point[][] but should be {[name: string]: Point[]}.

const obj = {
  a: 1,
  b: 'b',
  d: new Date(),
};

const out = _.mapObject(obj, (v, k) => '' + v);
// out is _.Dictionary<string>; should be { a: string, b: string, d: string }.

const myObj = _.extend({}, {a: 1}, { b: 2 });
// myObj's type is any, should be { a: number; b: number }.
