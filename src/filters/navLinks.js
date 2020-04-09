const shuffle = (array) => {
  const clone = array.slice(0);
  for (let i = clone.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

module.exports = function navLinks(collection, page) {
  const pageIndex = collection.findIndex(item => item.url === page.url);
  const matches = (a, b) => {
    return a.url === b.url
  }

  const prev = collection[pageIndex - 1] || null;
  const next = collection[pageIndex + 1] || null;
  const first = collection[0].url !== page ? collection[0].url : null;
  const last = collection.slice(-1)[0].url !== page.url ? collection.slice(-1)[0] : null;
  const others = collection.filter(item => item.url !== page.url);
  const random = others[Math.floor(Math.random() * others.length)] || null;
  const randomFive = shuffle(others).slice(0, 5).map(other => other.url).join(',');

  return {
    prev,
    next,
    first,
    last,
    random,
    randomFive
  }
}