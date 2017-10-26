export default (...classes) =>
  [...classes].filter(className => !!className).join(' ')
