function isMaleName(name) {
  const lowerCaseName = name.toLowerCase();

  if (lowerCaseName === "bonawentura") {
    return true;
  }

  if (lowerCaseName.endsWith("a")) {
    return false;
  }

  return true;
}

console.log(isMaleName("Ala"));
console.log(isMaleName("Jacek"));
console.log(isMaleName("Bonawentura"));
