//  Inverted Right Triangle Pattern


function inversion(rows){

    for (let i=rows; i>=1; i--){     // for Rows

        let valuePrint = "";

        for(let j=1; j<=i; j++){     // for Columns
           valuePrint += "* ";
        }   

        console.log(valuePrint);
    }

}

inversion(6);


