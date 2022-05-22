function basketballEquipment (input) {
    const yearsTax = Number(input[0])
    const priceOfTrainers = yearsTax - 0.4 * yearsTax
    const priceOfSuit = priceOfTrainers - 0.2 * priceOfTrainers
    const priceOfBall = priceOfSuit / 4
    const priceForAcc = priceOfBall / 5
    const totalPrice = priceOfTrainers + priceOfSuit + priceOfBall + priceForAcc + yearsTax
    console.log(totalPrice);
}

basketballEquipment(["365"])