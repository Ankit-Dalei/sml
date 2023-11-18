import React, { useEffect, useState } from 'react'
import Card from './Card'
const Main = () => {
  const [data,setData]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual API endpoint
        const response = await fetch('http://localhost:8080/api/Content');
        const Data = await response.json();

        // Step 4: Update state with the received data
        setData(Data);
        console.log(Data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Invoke the fetchData function
  }, []);


  // let image=<img src="./img/model.jpg" alt="img"/>
  // let Name=`Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quae, impedit deserunt iusto voluptatum harum dolor. Expedita repudiandae doloremque laboriosam?`
  // let Publisher=`Centurion University`
  // let Views=`41M views . `
  // let time=`2 day ago`
  // let Id=`0`
  const loops=data.map(item => (
    <Card img={ item.thumbnail} name={item.name} id={item.id} contentlink={item.contentlink} description={item.description} catagory={item.catagory} likes={item.likes} Datetime={item.Datetime}/>
  ))
  
  // []
  //   for (let index = 0; index < 10; index++) {
  //     loops.push(<Card img={ image} name={Name} publisher={Publisher} views={Views} time={time} id={Id}/>);
  //   }
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
