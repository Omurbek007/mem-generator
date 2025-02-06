import { useEffect, useState, useRef} from 'react'
import Meme from './meme'
import logo from "./assets/Troll Face.png"
import meme from "./assets/mem.jpg"
import './App.css'


function App() {
  const [memes, setMemes] = useState({
    topText: "Когда пытаешься объяснить что-то на собрании...",
    bottomText: "Но все равно тебя никто не понимает...",
    imageUrl: meme
})

  const [allMemes, setAllMemes] = useState([])
  const imageSection = useRef(null)

  useEffect(()=> {
    if (memes.imageUrl !== "" && imageSection.current !== null) {
      imageSection.current.scrollIntoView({behavior: "smooth", block: "center"})
    }
  },[memes.imageUrl])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.imgflip.com/get_memes");
        const data = await res.json();
          setAllMemes(data.data.memes);
      } catch (error) {
        console.error("An error while downloading memes:", error);
      }
    }
    fetchData()
  }, []);
  


  function handleChange(event) {
    const {value, name} = event.currentTarget;
    setMemes(prev => ({...prev ,  [name]: value}))
  }
 
  function getMemeImg() {
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const newMemeUrl = allMemes[randomNumber].url
    setMemes((prev) => ({...prev, imageUrl: newMemeUrl }))
    
  }

  function formHandler () {
    return console.log("Form submited!")
  }

  return (
    <>
      <section>
        <div className='bg-purple-900'>

          <header className='w-[90%] md:max-w-[80%] lg:max-w-[50%] text-white mx-auto h-20 flex items-center gap-4'>
            <img className='w-20' src={logo} alt="logo" />
            <div>
              <h1 className='text-4xl font-bold '>Meme Generator</h1>
            </div>
          </header>        
          </div>

        <form action={formHandler} className='w-[90%] md:max-w-[80%] lg:max-w-[50%] mx-auto flex flex-col items-center bg-white gap-6 space-y-5 mt-6'>
          <div className='flex justify-between gap-5 w-full'>
            <div className='w-full'>
              <label className='text-gray-700 text-xs md:text-lg w-full' htmlFor="top-text">Top Text</label>
              <input onChange={handleChange} value={memes.topText} className='border-1 border-gray-400 text-xs md:text-xl rounded-lg outline outline-black/20 h-10 md:h-15 w-full text-gray-600 px-3 py-2' placeholder='Some text!' type="text" name="topText" id="top-text" />
            </div>
            <div className='w-full'>
              <label className='text-gray-700 text-xs md:text-lg' htmlFor="bottom-text">Bottom Text</label>
              <input onChange={handleChange} value={memes.bottomText} className='border-1 border-gray-400 text-xs md:text-xl rounded-lg outline outline-black/20 h-10 md:h-15 w-full text-gray-600 px-3 py-2' placeholder='Some text!' type="text" name="bottomText" id="bottom-text" />
            </div>
          </div>
        </form>

          <div className='w-[90%] md:max-w-[80%] lg:max-w-[50%] mx-auto py-4'>
          <button onClick={getMemeImg} className='text-white bg-purple-900 p-3 text-xs md:text-2xl font-bold rounded-xl h-10 md:h-15 w-full mb-6 cursor-pointer' type="submit">Get a new meme image 🖼️</button>
          </div>
        {memes.imageUrl && <Meme img={memes.imageUrl} topText={memes.topText} bottomText={memes.bottomText} imageSection={imageSection}/>}
       
      </section>
    </>
  )
}

export default App
