function longestWordInString(...args) {
  let wordLengthArray = args.toString().split(' ').map(word => word.length)
  return Math.max(...wordLengthArray);
}

export { longestWordInString };
