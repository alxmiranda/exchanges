class listingExchanges {
  constructor(data) {
    this.data = data
  }
  
  static format (target) {
    return target.toString().replace('.', ',')
  }

  orderList () {
    let arr = [];

    for (let item in this.data) {
      arr.push(
        {
          name: `${item}`,
          last: this.data[item].last
        }
      )
    }
    
    return arr.sort((a, b) => {
      return a.last - b.last
    })
  }
}

export default listingExchanges