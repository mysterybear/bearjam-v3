export const defaultSpring = {
  type: "spring",
  damping: 30,
  mass: 2,
  stiffness: 200
}

export const defaultVariants = {
  variants: {
    enter: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 0,
    },
  },
  transition: defaultSpring
}

export const springTwo = {
  type: "spring",
  damping: 10,
  mass: 1,
  stiffness: 100,
}

export const springQuickExit = {

  type: "spring",
  damping: 100,
  mass: 1,
  stiffness: 500,
  restDelta: 1,
  restSpeed: 1
}
