class HeadLinesPage {
    constructor() {
      this.headlines = [1, 2, 3]
    }
  
    add(link){
      let headline = new Headline(link)
      this.headlines.push(headline)
      return headline
    }
    
    display() {
     let x = this.headlines[this.headlines.length - 1]
     return x
    }
  
  }
  
  
    
  
  
  
  
  
  
  
  
  
  
  