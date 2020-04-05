module.exports = function navLinks(collection, page) {
  const pageIndex = collection.findIndex(item => item.url === page.url);
  const matches = (a, b) => {
    return a.url === b.url
  }

  const prev = collection[pageIndex - 1] || null;
  const next = collection[pageIndex + 1] || null;
  const first = collection[0].url !== page.url ? collection[0] : null;
  const last = collection.slice(-1)[0].url !== page.url ? collection.slice(-1)[0] : null;
  const others = collection.filter(item => item.url !== page.url);
  const random = others[Math.floor(Math.random() * others.length)] || null;

  return {
    prev,
    next,
    first,
    last,
    random
  }
}