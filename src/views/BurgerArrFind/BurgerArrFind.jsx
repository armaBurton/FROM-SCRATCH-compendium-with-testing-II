export default function BurgerArrFind({find}) {
  console.log(find);

  return (
    <>
      { 
        find.map((found, i) => <BurgerRender key={`${found}${i}`} burger={found}/>)
      }
    </>
  )
}