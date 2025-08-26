import init from "./init/init.ts";
const sync = () => {
  init();
};
sync.init = init;
export default sync;
