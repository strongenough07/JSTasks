function foodDelivery (input) {
    const chickenMenuPrice = 10.35
    const fishMenuPrice = 12.4
    const veggieMenuPrice = 8.15
    const deliveryPrice = 2.5
    const percentageOfTotalSum = 0.2

    const chickenMenuCount = Number(input[0])
    const fishMenuCount = Number(input[1])
    const veggieMenuCount = Number(input[2])

    const chickenMealPrice = chickenMenuCount * chickenMenuPrice
    const fishMealPrice = fishMenuCount * fishMenuPrice
    const veggieMealPrice = veggieMenuCount * veggieMenuPrice

    const totalMealPrice = chickenMealPrice + fishMealPrice + veggieMealPrice
    const desertPrice = totalMealPrice * percentageOfTotalSum
    const finalPrice = totalMealPrice+ desertPrice + deliveryPrice
    console.log(finalPrice);
}

foodDelivery(["2 ",
"4 ",
"3 "])