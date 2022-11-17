import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className='fixed w-screen px-10 mx-auto py-10'>
      <div className='flex justify-between'>
        <motion.div
          initial={{
            opacity: 0,
            x: -200
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 1.5
          }}
          className='flex gap-10'>

          <SocialIcon url='https://github.com/Nikeshkumar-tk' bgColor='#535054' />
          <SocialIcon url='https://www.linkedin.com/in/nikesh-kumartk/' bgColor='#535054' />

        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 200
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 1.5
          }}
        >
          <SocialIcon network='email' bgColor='#535054' />

        </motion.div>
      </div>
    </div>
  )
}

export default Navbar