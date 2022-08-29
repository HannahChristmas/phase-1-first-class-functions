function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function namedFunction(){
        return 'Go to bed';
    };
}

function returnsAnAnonymousFunction(){
    return function(){
        return 'hello'
    }
}