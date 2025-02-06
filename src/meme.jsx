
export default function Meme (props) {
    
    return (
    <div ref={props.imageSection} className='w-[90%] md:max-w-[80%] lg:max-w-[50%] mx-auto rounded relative'>
    <img className='object-contain w-full h-full' src={props.img} alt="Random Meme" />
    <p className='text-white text-sm lg:text-4xl md:text-2xl sm:text-xl xs:text-xl font-[1000] absolute top-3 left-1/2 transform -translate-x-1/2 uppercase text-shadow-2xl'>{props.topText}</p>
    <p className='text-white text-sm lg:text-4xl md:text-2xl sm:text-xl xs:text-xl font-[1000] absolute bottom-3 left-1/2 transform -translate-x-1/2 uppercase text-shadow-2xl'>{props.bottomText}</p>
</div>
    )
}


