const req = import.meta.glob("./**/index.ts", {
  eager: true,
});
const modules = [];

Object.keys(req).forEach((key) => {
  modules.push(...req[key].default);
});

export default modules;
