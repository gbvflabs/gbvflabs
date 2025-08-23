import init from "./init/init";

const sync = () => {
  init();
};
sync.init = init;
export default sync;
