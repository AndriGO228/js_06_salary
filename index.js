function byModule(props) {
	const moneyForAllTheSalt = props.saltBeefBought * props.saltBeefPrice;
	const moneyForAllTheMoneyRice = props.redRiceBought * props.redRicePrice;
	const moneyForAllTheWine = props.oldVineBought * props.oldVinePrice;
	const totalMoneySpent = moneyForAllTheMoneyRice + moneyForAllTheSalt + moneyForAllTheWine;
	const theRestOfTheMoney = props.salary - totalMoneySpent;
	const result = theRestOfTheMoney % props.exchange;
	return result;
}

module.exports = byModule;