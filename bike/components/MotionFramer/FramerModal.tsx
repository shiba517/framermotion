"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const FramerModal = ({showModal, setShowModal}: any, ) => {
    const backDropVariant = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: {
            duration: 0.5
        }}
    }

    const uf = () => {
        setShowModal(false)
    }

    return (
        <div>
            <AnimatePresence mode="wait">
            { showModal && (
            <motion.div
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 text-white z-50"
            variants={backDropVariant}
            initial='initial'
            animate='animate'
            exit='initial'
            >
                <motion.div 
                className="bg-green-400 p-8 w-fit mx-auto"
                >
                    <p>div within modal - {showModal}</p>
                    { showModal && (
                        <p>true</p>
                    ) }
                    { !showModal && (
                        <p>false</p>
                    ) }
                    <button
                    className="bg-green-900 p-2 rounded"
                    onClick={() => {
                        uf()
                    }}
                    >exit</button>
                </motion.div>
            </motion.div>
            ) }
        </AnimatePresence>
        </div>
    );
}

export default FramerModal;
