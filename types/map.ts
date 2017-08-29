import * as utils from 'myutils';

// $ExpectType string[]
utils.map([1, 2], x => '' + x);

// $ExpectType string[]
utils.map([1, 2],
    (
      x // $ExpectType string
    ) => '' + x);
