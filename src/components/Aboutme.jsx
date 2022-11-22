import { motion } from 'framer-motion'

const Aboutme = () => {
    const navButtondata = ["About me", "Experience", "Projects", "Skills"]

    return (
        <div className='h-screen grid place-content-center px-10 sm:px-60'>
            <div className='flex flex-col space-y-10 min-h-[400px] '>

                <motion.h3
                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    className='text-gray-400 tracking-[10px] text-2xl'>About me</motion.h3>
                <motion.article
                initial = {{
                    opacity:0
                }}
                whileInView = {{
                    opacity:1
                }}
                transition = {{
                    duration:1.5,
                    delay:1
                }}
                className='sm text-white'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident ipsum tempora dolore omnis sequi, quae iusto facere? Repellendus adipisci libero saepe necessitatibus magni blanditiis nesciunt, provident, debitis, a id voluptates ipsam laudantium suscipit vel optio nulla doloremque minima voluptatum incidunt.

                </motion.article>
            </div>

        </div>
    )
}

export default Aboutme