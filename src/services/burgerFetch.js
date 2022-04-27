const burgerFetch = async () => {
  try {
    const burgerArr = [];
  
    const burgers = await fetch('https://bobsburgers-api.herokuapp.com/characters');
  
    const burgersJson = await burgers.json();
  
    for (let i = 0; i < 10; i++) {
      burgerArr.push(burgersJson[Math.floor(Math.random() * 502)]);
    }

    console.log(`|| burgerArr >`, burgerArr);
    return burgerArr;
  } catch (error) {
    console.error(error);
  }
}

export default burgerFetch;