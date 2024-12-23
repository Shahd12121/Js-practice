do{
    console.log("1 to order burger");
    console.log("1 to order piza");
    console.log("1 to order frid chicken");
    console.log("1 to order  water");
    let number= Number(prompt("choose number to order"));
    switch (number) {
        case 1 : 
        console.log("burger your way");
        break;
        case 2 : 
        console.log("piza your way");
        break;
        case 3 : 
        console.log("frid chicken your way");
        break;
        case 4 : 
        console.log("water your way");
        break;

        default:
            console.log("sorry choose from 1 to 4");
            break;
    }
    

} while (number!=0);