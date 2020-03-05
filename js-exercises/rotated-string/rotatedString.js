const rotatedString = (str1, str2) => {
  if(str1.length != str2.length || str1 == str2)
    return false

  return `${str1}${str2}`.indexOf(str2) !== -1
};

export { rotatedString };
