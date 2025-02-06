import viteLogo from '/vite.svg'
import profile_img from "./assets/erin.jpg"

export default function Card() {
    return (
        <>
            <div className="flex flex-col max-w-sm bg-gray-600 p-4 rounded-lg m-4">


                <div className="mx-auto m-4 h-35 max-w-sm flex items-center bg-white dark:bg-slate-800 gap-x-4 rounded-xl py-1 px-6 shadow-lg dark:shadow-none outline outline-black/5 dark:-outline-offset-1 dark:outline-white/10">
                    <img className='size-12 shrink-0' src={viteLogo} alt="logo" />
                    <div>
                        <div className='text-xl font-medium text-black dark:text-white'> ChitChat </div>
                        <p className='text-gray-500 dark:text-gray-400'>You have new message!</p>
                    </div>
                </div>


                <div className="mx-auto h-35 m-4 shadow-lg outline outline-black/10 flex flex-col sm:flex-row items-center text-center sm:items-center  sm:gap-6 sm:py-4 bg-white rounded-xl max-w-sm px-4">
                    <img className='block mx-auto h-24 rounded-full my-2 sm:mx-0 sm:shrink-0' src={profile_img} alt="profile-img" />
                    <div>
                        <div className='space-y-0.5 flex flex-col items-center'>
                            <p className='text-lg font-semibold text-black'>Erin Lindford</p>
                            <p className='font-medium text-gray-500'>Product Engineer</p>
                        </div>
                        <button className=' text-purple-600 border-purple-200 border rounded-xl font-medium px-2 pb-0.5 hover:cursor-pointer hover:bg-purple-600 hover:text-white my-2'>Message</button>
                    </div>
                </div>
            </div>
        </>
    )
}