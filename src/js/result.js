class result {
  constructor(qtd, btc) {
    this.qtd = qtd  ;
    this.btc = btc;
  }

  printResult () {
    return (this.qtd * this.btc).toFixed(2)
  }
}

export default result