export function formatKey(key: string) {
  if (!key.trim()) {
    return 'space';
  }

  return key;
}