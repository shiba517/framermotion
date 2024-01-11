"use client"

import { motion, AnimatePresence } from 'framer-motion';
// import { useRouter } from 'next/router';

const variantsWithState = {
    initialState: {
        opacity: 0
    },
    animateState: {
        opacity: 1
    },
    exitState: {

    }
}

const MFAnimatePresence = (props: any) => {
    // const router = useRouter()
  return (
    <AnimatePresence mode="wait" onExitComplete={() => props.setShowModal(false)}>
        <motion.div
        className=''
        initial={{ opacity: 0, x: -1000, y: 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -200, y: 0 }}
        transition={{ duration: 1 }}
        >
            {props.children}
        </motion.div>
    </AnimatePresence>
  );
}

export default MFAnimatePresence;
