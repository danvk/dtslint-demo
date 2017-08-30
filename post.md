# Testing types: An introduction to dtslint

- Example of underscore typings working well.
- Example of underscore typings working poorly.
- Before you refactor, it's a good idea to get your test coverage up!
- Flaws with existing DefinitelyTyped "tests"
- How dtslint fixes this
- Examples of dtslint in action.

Over the years, the TypeScript community has amassed an enormous collection of type declarations for popular JavaScript libraries. When these work well, they are one of the very best features of the language. They make adopting and using a library vastly easier, saving you countless trips to the documentation:

    import {MagicClass} from 'magic-library';
    const c = new MagicClass();
    c.  // wait, what do I do with this?

But as anyone who uses TypeScript for long learns, sometimes type declarations can fail you. Occasionally they're just wrong, either because the typings author made a mistake or because the library has changed. This can result in code that type checks but fails at runtime, just the thing that static analysis is supposed to prevent!

More insidiously, the type declarations can be _imprecise_. For example:

    const objs = [{x: 1, y: 2}, {x: 2, y: 3}];
    const xs = _.pluck(objs, 'x');
    // xs's type is any[] but it should be number[]

`any[]` is TypeScript for "an array of anything." It's an [opaque type][opaque-type], which effectively disables the type checker. This can give you a false sense of security that your code is correct, when in fact it's just not being checked. This is especially true if you're using `noImplicitAny`, since you wind up with an opaque type without explicitly asking for one (in this case it's the type declaration author who made the `any` explicit).

This comes up all the time. Not to pick on underscore, but here's a slightly different example:

    const myObj = _.extend({}, {a: 1}, { b: 2 });
    // myObj's type is any; should be { a: number; b: number }.

Part of the reason for this is that writing precise typings is [tedious][typed-chain]. Sometimes it's not possible, or wasn't possible until [recent versions of TypeScript][typed-pluck].

But there's another reason that type declarations are often imprecise: _they're hard to test!_

[typed-pluck]:
[typed-chain]:
[opaque-type]:
