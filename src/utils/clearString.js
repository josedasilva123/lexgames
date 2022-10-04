export function clearString(string) {
  return string
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "");
}
