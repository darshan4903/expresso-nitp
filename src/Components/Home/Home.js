import React from 'react'
import img1 from '../Photos/doodle5.jpg'
import img2 from '../Photos/doodle6.jpg'
import img3 from '../Photos/doodle2.jpg'
import '../Home/Home.css'

const Home = () => {
  return (
    <div className="Home-Parent-Container">
      <div className="Home-Image-Container">
       <div className="Home-Image-Container-Image"></div>
        <div className="Home-Image-Container-Content">
            <h3 className="Home-Image-Container-Title">Harlan Ellison</h3>
            <img src={img1} className="Home-Image-Container-Display-Image"/>
            <p className="Home-Image-Container-Detail">PEOPLE ON THE OUTSIDE THINK THERE'S SOMETHING MAGICAL ABOUT WRITING, THAT YOU GO UP IN THE ATTIC AT MIDNIGHT AND CAST THE BONES AND COME DOWN IN THE MORNING WITH A STORY, BUT IT ISN'T LIKE THAT. YOU SIT IN BACK OF THE TYPEWRITER AND YOU WORK, AND THAT'S ALL THERE IS TO IT.</p>
        </div>
         
      </div>
      <div className="Home-Image-Container">
       <div className="Home-Image-Container-Image"></div>
        <div className="Home-Image-Container-Content">
            <h3 className="Home-Image-Container-Title">Jane Yolen</h3>
            <img src={img2} className="Home-Image-Container-Display-Image"/>
            <p className="Home-Image-Container-Detail">EXERCISE THE WRITING MUSCLE EVERY DAY, EVEN IF IT IS ONLY A LETTER, NOTES, A TITLE LIST, A CHARACTER SKETCH, A JOURNAL ENTRY. WRITERS ARE LIKE DANCERS, LIKE ATHLETES. WITHOUT THAT EXERCISE, THE MUSCLES SEIZE UP.</p>
        </div>
         
      </div>
      <div className="Home-Image-Container">
       <div className="Home-Image-Container-Image"></div>
        <div className="Home-Image-Container-Content">
            <h3 className="Home-Image-Container-Title">Richard Wright</h3>
            <img src={img3} className="Home-Image-Container-Display-Image"/>
            <p className="Home-Image-Container-Detail">THE MORE CLOSELY THE AUTHOR THINKS OF WHY HE WROTE, THE MORE HE COMES TO REGARD HIS IMAGINATION AS A KIND OF SELF-GENERATING CEMENT WHICH GLUED HIS FACTS TOGETHER, AND HIS EMOTIONS AS A KIND OF DARK AND OBSCURE DESIGNER OF THOSE FACTS. RELUCTANTLY, HE COMES TO THE CONCLUSION THAT TO ACCOUNT FOR HIS BOOK IS TO ACCOUNT FOR HIS LIFE.</p>
        </div>
         
      </div>
    </div>
  )
}

export default Home