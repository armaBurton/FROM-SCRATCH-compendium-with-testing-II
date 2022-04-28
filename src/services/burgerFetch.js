const burgerFetch = async () => {

    console.log('burgerFetch');

    const burgerArr = [];
    const bothArrays = [];
    const burgers = await fetch('https://bobsburgers-api.herokuapp.com/characters');
    const burgersJson = await burgers.json();

    for (let i = 0; i < 10; i++) {
      burgerArr.push(burgersJson[Math.floor(Math.random() * 502)]);
    }

    bothArrays.push(burgerArr);
    bothArrays.push(burgersJson);

    return bothArrays;
}

export default burgerFetch;