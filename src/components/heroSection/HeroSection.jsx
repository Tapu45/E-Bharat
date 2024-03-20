import React, { useState } from 'react'


const images = [
  "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5ecf4f27ed5376ef.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/480/80/image/68959fd7d83448b8.png?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/480/80/image/b2132b52f8b2c7dd.jpg?q=20",
  "https://rukminim2.flixcart.com/fk-p-flap/480/80/image/d89c9d44e4e3fcbf.jpg?q=20",
];

function HeroSection() {
  return (
    <div>
         <img src="https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="" />
    </div>
  )
}
// function HeroSection() {
//   const [curr, setCurr] = useState(0);


//   const nextSlide=()=>{
//     setCurr(curr===images.length-1?0:curr+1)
//   }
//   const prevSlide=()=>{
//     setCurr(curr===0?images.length-1:curr-1)
//   }
//   return (
//     <>
//        <div className="container my-5">
//         <div className="row text-centre">
//           <div className="col-6">
//              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
//               {
//                 images.map((value, index) => 
//                   curr===index &&  (
//                     <div className="carousel-inner">
//                       <div className="carousel-item active">
//                         <img src={value} className="d-block w-100" alt="..." />
//                       </div>
//                     </div>
//                   )
//                 )
//               }

//             </div>
//             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"
//             onClick={prevSlide}
//             >
//               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//               <span className="visually-hidden">Previous</span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"
//             onClick={nextSlide}
//             >
//               <span className="carousel-control-next-icon" aria-hidden="true"></span>
//               <span className="visually-hidden">Next</span>
//             </button> 


//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

export default HeroSection;