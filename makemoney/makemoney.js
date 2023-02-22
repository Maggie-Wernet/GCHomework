(function () {
  console.log("hello");
  const numberOfCoins = document.getElementById("numberOfCoins");
  const typeOfCoins = document.getElementById("typeOfCoin");
  const buttonMakeMoney = document.getElementById("buttonMakeMoney");
  const coinContainer = document.getElementById("coins");

  function makeMoney(event) {
    event.preventDefault();
    for(let i = 0; 1 <numberOfCoins; 1++){
        const newCoin = document.createElement("div");
    const newCoinP = document.createElement("p");
    if(newCoinP.innerText = coinType.value);
}
newCoin.append(newCoinP);
newCoin.addEventListener('click', (event) =>{
    if(event.target.classList.contains('coins')){
        event.target.remove()
    }else{
        event.target.parentNode.remove();
    }
});
newCoin.classList.add('coin');
newCoin.classList.add(coinType.value);
newContainer.append(newCoin);


   
    newCoinP.innerText = coinType.value;
    newCoin.append(newCoinP);
    newCoin.classList.add("coin");
    coinContainer.append(newCoin);
  }
  

})();
