import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      count: 0,
      yazi: 0,
      tura: 0,
    };

  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({count:this.state.count+1})
    this.setState({ flipping: true });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
    if(RandomNumber(1,0) === 1){
      this.setState({side: "yazi",yazi: this.state.yazi+1})

    }else {
      this.setState({side: "tura",tura: this.state.tura+1})
    }
    
  };


  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong>{this.state.count} </strong>
          atıştan
          <strong>{this.state.yazi}  </strong>ü tura
          <strong> {this.state.tura}</strong>
          si yazı geldi.
        </p>
      </div>
    );
  }
}
function RandomNumber(max,min) {
  let number = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(number);
  return number
}
export default CoinFlipper;




