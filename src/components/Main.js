import React from 'react'
import Card from './Card'

const Main = () => {
  let image=<img src="./img/model.jpg" alt=""/>
  let Name=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quae, impedit deserunt iusto voluptatum harum dolor. Expedita repudiandae doloremque laboriosam?`
  let Publisher=`Centurion University`
  let Views=`41M views . `
  let time=`2 day ago`
  let Id=`0`
  const loops=[]
    for (let index = 0; index < 10; index++) {
      loops.push(<Card img={ image} name={Name} publisher={Publisher} views={Views} time={time} id={Id}/>);
    }
  return (
    <>
    <div className="main_body">
      <div className="banner_div">
        <img src="" alt=""/>
      </div>
      <div className="main_content">
      {loops}
      </div>
    </div>
      
    </>
  )
}

export default Main
