import { motion } from 'framer-motion';
import { uniButtonVariant } from '@/app/_lib/framer-motion-variants'

const buttonVariant = uniButtonVariant

const MFButton = () => {
  return (
    <motion.button
    className='bg-purple-950 px-4 py-2'
    variants={buttonVariant}
    initial='initial'
    animate='animate'
    whileHover='whileHover'
    >button</motion.button>
  );
}

export default MFButton;
