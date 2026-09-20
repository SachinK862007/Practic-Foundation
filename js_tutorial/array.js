//let SK = ['Master', 'SK', 'Welcome', 'To', 'Your', 'World', 'Enjoy!'];
//
//console.log(SK, '\n');
//
//console.log(SK.length, '\n');
//
//console.log(SK.indexOf('SK'), `(${SK[1]})`);
//console.log(SK.indexOf('to'), `(${SK[3]})`);
//console.log(SK.indexOf(0), '\n'); //this witll show -1 coz num 0 is not in array
//
//SK.push('Hay Wow');
//console.log(SK,'\n');    //this will display Hay Wow as the last element of the array 
//
//SK.pop();
//console.log(SK,'\n');   //this will pop thw last element of the array
//
//SK.unshift('WOW !');
//console.log(SK,'\n');   //this element will be placed at the begining of the array 
//
//SK.shift();
//console.log(SK,'\n');   //this will remove the 1st added elemet using [.unshift()] from the array
//
//
//for(let s of SK){
//    console.log(s);
//}
//
//let sorted = SK.sort();
//console.log('\n', sorted);
//
//let sorted1 = SK.sort().reverse();
//console.log('\n', sorted1);
//
//
//function f(...fs){
//    console.log(...fs); // see the output for this {console.log(fs);} and compait the output
//}
//
//let f1 = 25, f2 = 30, f3 = 12, f4 = 11, f5 = 5;
//
//f(f1, f2, f3, f4, f5);


function sum(...s1){
    let ss = 0;

    for(let s of s1){
        s = Number(s);
        ss += s;
    }
    console.log(`\n The Total Bill is $ ${ss}`);
}

sum(10, 20, 50, 101);