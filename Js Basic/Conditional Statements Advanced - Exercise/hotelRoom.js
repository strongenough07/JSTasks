function hotelRoom (input) {
    const mayAndOctomberStudioPrice = 50
    const mayAndOctomberApartmentPrice = 65
    const juneAndSeptemberStudioPrice = 75.2
    const juneAndSeptemberApartmentPrice = 68.7
    const julyAndAugustStudioPrice = 76
    const julyAndAugustApartmentPrice = 77
    const season = input[0]
    const nights = Number(input[1])
    let totalMoneyForStudio = 0
    let totalMoneyForApartment = 0


    switch (season) {
        case "May":
        case "October":
            totalMoneyForStudio = nights * mayAndOctomberStudioPrice
            totalMoneyForApartment = nights * mayAndOctomberApartmentPrice
            if (nights > 7 && nights < 14) {
                totalMoneyForStudio -= totalMoneyForStudio * 0.05
            } else if (nights > 14) {
                totalMoneyForStudio -= totalMoneyForStudio * 0.3
            }
            break;
        case "June":
        case "September":
            totalMoneyForStudio = nights * juneAndSeptemberStudioPrice
            totalMoneyForApartment = nights * juneAndSeptemberApartmentPrice
            if (nights > 14) {
                totalMoneyForStudio -= totalMoneyForStudio * 0.2
            }
            break;
        case "July":
        case "August":
            totalMoneyForStudio = nights * julyAndAugustStudioPrice
            totalMoneyForApartment = nights * julyAndAugustApartmentPrice
            break; 
    }
    if (nights > 14) {
        totalMoneyForApartment -= totalMoneyForApartment * 0.1
    }
    console.log(`Apartment: ${totalMoneyForApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalMoneyForStudio.toFixed(2)} lv.`);


}

hotelRoom(["May",
"15"])