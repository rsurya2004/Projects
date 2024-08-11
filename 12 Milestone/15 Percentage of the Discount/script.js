// Discount Percentage

let originalPrice = 100;
let discountedPrice = 78;


// Original * Percent {value/100} = dis   --- (1)
// original - dis = discounted

// Using (1),  original * percent = ori - discounted
    
// percent {value/100} = ((ori - dis) / ori ) 

//  value  = ((ori - dis) / ori ) * 100


let discount = (original, discounted) => {

    let discount = 0;

    discount = ((original - discounted) / original) * 100;

    discount.toFixed(2);  // Used to round-off to 2 decimal places
    // Math.floor()  = used to round-off to whole numbers, instead of decimal points

    console.log("Discount Percent :- " + discount + "%");    

}

discount(originalPrice, discountedPrice);