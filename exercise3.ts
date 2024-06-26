function add(a: number , b:number): number{
    return a + b;
}

function getFixedNumber(): number{
    return 42;
}

function formatBooleanToString(word: String , anyFlag?: boolean) : String{
    if(anyFlag){
        return word.toUpperCase();
    }else{
        return word.toLowerCase();
    }
}