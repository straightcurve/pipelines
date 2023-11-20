export const waitImmediate = () => new Promise((resolve) => setImmediate(resolve));

export default waitImmediate;
