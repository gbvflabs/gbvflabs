import sync from "../../sync/src/index.ts";
const cli = () => {
  sync();
};
cli.sync = sync;
const npm_lifecycle_event = process.env.npm_lifecycle_event;
if (npm_lifecycle_event === "cli") {
  cli();
}

export default cli;
