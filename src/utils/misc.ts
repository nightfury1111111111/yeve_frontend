export const sliceAddress = (address: string): string => {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
};