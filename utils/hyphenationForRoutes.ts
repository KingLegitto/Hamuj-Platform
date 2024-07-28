function hyphenate(inputString: string) {
  inputString = inputString.toLowerCase();
  const outputString = inputString.replace(/\s+/g, "-");
  return outputString;
}

function dehyphenate(inputString: string) {
    // Replace hyphens with spaces
  const replacedString = inputString.replace(/-/g, ' ');

  // Capitalize the first letter of each word
  const capitalizedString = replacedString
    .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize the first letter of each word

  return capitalizedString;
  }

export { hyphenate, dehyphenate };
