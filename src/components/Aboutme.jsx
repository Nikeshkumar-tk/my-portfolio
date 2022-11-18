import { motion } from 'framer-motion'

const Aboutme = () => {
    const navButtondata = ["About me", "Experience", "Projects", "Skills"]

    return (
        <div className='h-screen snap-y text-white flex flex-col-reverse justify-center items-center  px-10 overflow-x-hidden relative'>
            {/* Sidebar */}
            <div className='overflow-hidden  mt-10 '>
                <ul className='flex gap-3 whitespace-nowrap flex-col items-center'>
                    {
                        navButtondata.map((data, index) => (
                            <motion.li
                                initial={{
                                    opacity: 0,
                                    x: -300
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0
                                }}
                                transition={{
                                    delay: 1.1 + index * 0.5,
                                    duration: 1
                                }}
                            >
                                <button className='bg-[#39393b] h-8 rounded-md px-5 hover:bg-[#717175]'>
                                    {data}
                                </button>
                            </motion.li>
                        ))
                    }
                </ul>
            </div>

            {/* Image container with intro */}
            <div className='text-center w-40 flex flex-col items-center'>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 300
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    className='h-[200px] w-[200px] rounded-full border border-[#ffff]'>

                    <img src="https://avatars.githubusercontent.com/u/104181447?v=4"
                        alt="profile pic"
                        className='h-full rounded-full'
                    />
                </motion.div>

                <motion.h2
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
                    className='mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</motion.h2>

            </div>
        </div>
    )
}

export default Aboutme