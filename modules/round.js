function round  (num, decimals = 0) {
  return Number(`${Math.round(`${num}e${decimals}`)}e-${decimals}`)
}

  export default round