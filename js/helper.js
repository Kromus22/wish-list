export const createElement = (tagName, attr) => {
  const elem = document.createElement(tagName);
  Object.assign(elem, attr);
  return elem;
}