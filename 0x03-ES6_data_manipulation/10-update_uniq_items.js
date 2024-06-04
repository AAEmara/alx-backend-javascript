export default function updateUniqueItems(itemsMap) {
  for (const [key, value] of itemsMap) {
    if (value === 1) {
      try {
        itemsMap.set(key, 100);
      } catch (error) {
        throw new Error('Cannot process');
      }
    }
  }
  return (itemsMap);
}
