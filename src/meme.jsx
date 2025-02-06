
export default function Meme (props) {
    
    return (
    <div ref={props.imageSection} className='max-w-[60%] mx-auto rounded relative'>
    <img className='w-full' src={props.img} alt="Random Meme" />
    <p className='text-white text-sm lg:text-4xl md:text-2xl sm:text-xl xs:text-xl font-[1000] absolute top-4 left-1/2 transform -translate-x-1/2 uppercase text-shadow-lg'>{props.topText}</p>
    <p className='text-white text-sm lg:text-4xl md:text-2xl sm:text-xl xs:text-xl font-[1000] absolute bottom-4 left-1/2 transform -translate-x-1/2 uppercase text-shadow-lg'>{props.bottomText}</p>
</div>
    )
}


