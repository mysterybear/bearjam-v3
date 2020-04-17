module.exports = {
  theme: {
    extend: {
      boxShadow: {
        foobar: '0 0 0 2px rgba(66, 153, 225, 0.5)',
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'focus-within'],
    outline: ['responsive', 'hover', 'focus', 'focus-within'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    borderWidth: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [],
}
