import { motion } from 'framer-motion'

const Skills = () => {

    //Skills image urls

    const imgUrls = [
        "https://cdn-icons-png.flaticon.com/512/919/919825.png",
        "data:image/jpeg;base64,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",
        "https://www.drupal.org/files/project-images/screenshot_361.png",
        "data:image/png;base64,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",
        "data:image/jpeg;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjUAKRQJTPSVCMvtKQYdCeQ8_Cyzy1lCcwg&usqp=CAU"

    ]
    
    return (
        <div className='h-screen relative grid place-content-center'>
            <motion.span
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
                className='absolute top-[200px] w-screen text-gray-500 text-4xl flex justify-center'><h2>Skills</h2></motion.span>
            <div className='grid grid-cols-4 gap-6 sm:grid-cols-5'>

                {
                    imgUrls.map((url, index) => (
                        <motion.img src={url} alt=""
                            initial={{
                                opacity: 0,
                                y: -100,
                                scaleY: 0
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scaleY: 1
                            }}
                            transition={{
                                duration: 1,
                                delay: index * 0.1
                            }}
                            whileHover={{
                                scale: 1.1
                            }}
                            className='h-20 w-20 rounded-full object-cover' />
                    ))
                }
            </div>
        </div>
    )
}

export default Skills