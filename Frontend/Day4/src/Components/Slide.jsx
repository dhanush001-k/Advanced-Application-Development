// import React from 'react';
import { Slide } from 'react-slideshow-image';
import './Slide.css'
import 'react-slideshow-image/dist/styles.css';

const Slider = () => {
  
    const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
      }
      const Images = [
        {
          url: 'https://cdn.winsightmedia.com/platform/files/public/2022-12/background/Food%20price%20inflation-grocery%20basket-supermarket%20receipt_Shutterstock.jpg?VersionId=PykF1G4r6zHo1zAebD5UNp9WEoAuEW7v',
          
         
        },
        {
          url: 'https://www.rd.com/wp-content/uploads/2023/04/Getty-1051355600-Resize-DH-RD-Most-Popular-Grocery-Item.jpg'
          
        },
        {
          url: 'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2Farchive%2F2d4ea32ed14a1f75cf1b454748dfa99cd4a1fa62'
        
        },
      ];
      

  return (
    <center>
    <div className="slide-container">
        <h2>Hello</h2>
          <Slide>
           {Images.map((slideImage, index)=> (
              <div key={index}>
                <div id="slideimg" style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`,height:'900px'}}>
                 
                </div>
              </div>
            ))} 
          </Slide>
        </div>
        </center>
  );
};

export default Slider;
