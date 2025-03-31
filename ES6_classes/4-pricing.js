import Currency from './3-currency.js';
export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError ('Amount must be a number');
    }
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (typeof amount !== 'currency') {
      throw new TypeError ('Currency must be a currency');
    }
    this._currency = currency;
  }

  desplayFullPrice() {
    return `${this._amount} (${this._currency})`;
  }

  static convertPrice(amount, conversionRatte) {
    return amount * conversionRate;
  }
}
