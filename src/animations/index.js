export const defaultAnimation = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: {
    enter: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 0
    }
  },
  transition: {
    type: 'spring',
    damping: 5,
    stiffness: 500
  }
}
