import { motion } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

const Hero = () => {

    const navButtondata = ["About me", "Experience", "Projects", "Skills"]
    const [text, count] = useTypewriter({
        words: [
            "Hi i am Nikesh kumar ",
            "A full stack web developer",
            "I can create websites for you"
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen snap-y text-white flex flex-col-reverse justify-center items-center  px-10 overflow-x-hidden relative sm:flex-row sm:px-28 sm:justify-between'>
            {/* Sidebar */}
            <div className='overflow-hidden  mt-10 sm:ml-20 text-4xl'>
                <ul className='flex gap-3 whitespace-nowrap flex-col items-center'>
                    {
                        navButtondata.map((data, index) => (
                            <motion.li
                                initial={{
                                    opacity: 0,
                                    x: -300,
                                    scale:0
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    scale:1
                                }}
                                transition={{
                                    delay: 1.1 + index * 0.5,
                                    duration: 1
                                }}
                                className='cursor-pointer hover:text-yellow-400 tracking-wider'
                            >

                                {data}
                            </motion.li>
                        ))
                    }
                </ul>
            </div>

            {/* Image container with intro */}
            <div className='text-center w-40 flex flex-col items-center space-y-8 sm:mr-80  relative'>

                <motion.div 
                initial = {{
                    scale:0,
                    opacity:0,
                    y:200

                }}
                animate = {{
                    scale:1,
                    opacity:1,
                    y:0
                }}
                transition = {{
                    duration:1
                }}
                className='h-[200px] w-[200px] sm:h-[400px] sm:w-[400px]'>

                    <img src="https://avatars.githubusercontent.com/u/104181447?v=4"
                        alt="profile pic"
                        className=' rounded-full relative object-cover mx-auto h-full w-full'
                    />
                </motion.div>

                <div className=' h-11 text-center  text-4xl whitespace-nowrap font-semibold'>
                    <motion.span
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{
                            delay: 1.6,
                            duration: 1.5
                        }}
                        className='mt-7'>{text}</motion.span>
                        <Cursor cursorColor='#f7AB0A'/>
                </div>

            </div>
        </div>
    )
}

export default Hero