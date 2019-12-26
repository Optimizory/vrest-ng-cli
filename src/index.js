#!/usr/bin/env node

const path = require("path");
const { spawn } = require("child_process");

const BinWrapper = require("bin-wrapper");

const ver = require("../package.json").version;
const base = `https://github.com/optimizory/vrest-ng-cli/releases/download/v${ver}`;

const uver = ver.replace(/\./g, "_");
let fileName = `vrest_ng_cli_linux_${uver}`;
switch(process.platform){
  case 'darwin':
    fileName = `vrest_ng_cli_mac_${uver}`;
    break;
  case 'win32':
    fileName = `vrest_ng_cli_win_${uver}.exe`;
    break;
}
const bin = new BinWrapper()
  .src(`${base}/vrest_ng_cli_linux_${uver}`, "linux", "x64")
  .src(`${base}/vrest_ng_cli_mac_${uver}`, "darwin")
  .src(`${base}/vrest_ng_cli_win_${uver}.exe`, "win32", "x64")
  .dest(path.join("vendor"))
  .use(fileName);

bin
  .run(["--version"])
  .then(
    _ => spawn(bin.path(), process.argv.slice(2), { stdio: "inherit" }),
    e => console.error(`Failed! ${e}`)
  );
