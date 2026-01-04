let loop_var = {
    name : 'abul',
    age: 28,
    sex: 'male'
}

for (var i in loop_var){
    console.log(loop_var[i]);
}


//  For in can also be used array index....

let arr = [ 34,55,343,4343]


for(var i in arr ){
    console.log(i)
}

//  Here i is denoting the idx of the array.... 0,1,2,3

