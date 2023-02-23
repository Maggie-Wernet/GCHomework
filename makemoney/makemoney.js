(function () {
  console.log("hello");
  const makeMoneyButton = document.getElementById("buttonMakeMoney");

  buttonMakeMoney.addEventListener("click", (event) => {
    console.log(event.target);

    const howMany = document.getElementById("numberOfCoins");
    const whichCoin = document.getElementById("typeOfCoin");

    for (let i = 0; i < howMany.value; i++) {
      const newCoin = document.createElement("div");
      newCoin.classList.add(whichCoin.value);

      document.body.append(newCoin);
    }
  });
})();
