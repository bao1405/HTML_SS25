let n =+prompt('Nhập n')
let count=0;
for(let i=0;i<n;i++){
    if(i%2==0){
        count++;
    }
}
console.log(`Có ${count} số chẵn`)
