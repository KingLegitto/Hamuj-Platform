function hyphenate(inputString: string) {
  inputString = inputString.toLowerCase();
  const outputString = inputString.replace(/\s+/g, "-");
  return outputString;
}

function dehyphenate(inputString: string) {
  const decodedString = decodeURIComponent(inputString) // In case string has special characters
    
  // Replace hyphens with spaces
  const replacedString = decodedString.replace(/-/g, ' ');

  // Capitalize the first letter of each word
  const capitalizedString = replacedString.replace(/(?<=^|\s|&)\w/g, char => char.toUpperCase());
  return capitalizedString;
  }

export { hyphenate, dehyphenate };
