const burgerFetch = async () => {
    // try {
    //   console.log(`|| bigArr >`, bigArr);
    //   const burgerArr = [];
    //   if(!bigArr){
      
    //     const burgers = await fetch('https://bobsburgers-api.herokuapp.com/characters');
      
    //     const burgersJson = await burgers.json();
        
    //     console.log(`|| burgersJson >`, burgersJson);

    //     for (let i = 0; i < 10; i++) {
    //       burgerArr.push(burgersJson[Math.floor(Math.random() * 502)]);
    //     }
    //     const bothArrays = []

    //     bothArrays.push(burgerArr);
    //     bothArrays.push(burgersJson);

    //     return bothArrays;
    //   } else {
    //     for (let i = 0; i < 10; i++) {
    //       bigArr.push(burgersJson[Math.floor(Math.random() * 502)]);
    //     }
    //     const bothArrays = [];

    //     bothArrays.push(burgerArr);
    //     bothArrays.push(burgersJson);

    //     return bothArrays;
    //   }
    // } catch (error) {
    //   console.error(error);
    // }

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