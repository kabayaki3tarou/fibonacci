'use strict';
//連想配列Map
//変数memo＝一度計算した値を保存する方法をメモ化というため
const memo = new Map();
//0と1のときの値は事前に定義しておく
memo.set(0, 0);
memo.set(1, 1);
//fib関数の実装
function fib(n) {
    if(memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}



//最初のプログラム
/*
//関数fibを定義
function fib(n) {
    if ( n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n -2);
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}

*/