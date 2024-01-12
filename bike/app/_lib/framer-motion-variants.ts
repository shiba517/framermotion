// ***** UNIVERSAL *****
export const uniButtonVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            // delay: 2
        }
    },
    whileHover: {
        scale: 1.1, 
        boxShadow: '0px 0px 8px rgb(255, 255, 255'
    }
}

export const heroHeaderVariant = {
    initial: {
        y: '-50vh',
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 4,
            duration: 1,
        }
    }
}

export const heroSubHeaderVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        rotateZ: 360,
        transition: {
            duration: 1,
            delay: 1
        }
    }
}