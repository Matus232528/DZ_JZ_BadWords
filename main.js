const str1 ='aaaaa bbbb ccc bbddd dddfffkk lll ac aaa';
const blackList =['aa', 'bb', 'dd'];
const replacement =';(';

let rez = str1;

for (let i=0; i < blackList.length; i++){
    let count = 0;

    while(count != -1){
        count = rez.indexOf(blackList[i],count+1);
        rez = rez.replace(blackList[i],replacement);
    }
}
console.log(rez);