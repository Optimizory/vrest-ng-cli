#!/usr/bin/env node

const path = require("path");
const { spawn } = require("child_process");
const archModule = require('arch');
const os = require("os");

const BinWrapper = require("binary-wrapper");

const ver = require("../package.json").version;
const base = `https://github.com/optimizory/vrest-ng-cli/releases/download/v${ver}`;
const { isNonGlibcLinux } = require('detect-libc');

const uver = ver.replace(/\./g, "_");
let fileName = `vrest_ng_cli_linux_${uver}`;
switch(process.platform){
  case 'darwin':
    fileName = `vrest_ng_cli_mac_${uver}`;
    break;
  case 'win32':
    fileName = `vrest_ng_cli_win_${uver}.exe`;
    break;
  case 'linux':
    if(isNonGlibcLinux){
      fileName = `vrest_ng_cli_alpine_${uver}`;
    }
    break;
}

const resolvePath = function(fpath){
  if(fpath){
    if(fpath.startsWith("~")){
      fpath = fpath.replace(/^~/, os.homedir());
    }
    fpath = path.normalize(fpath);
    fpath = path.resolve(fpath);
  }
  return fpath;
};

var cacheFolder = process.env.VREST_CACHE_FOLDER;
var defaultCache = function(){
  let cache = "./vendor";
  switch(process.platform){
    case 'darwin':
      cache = '~/Library/Caches/vrest';
      break;
    case 'win32':
      cache = '/AppData/Local/vrest/cache';
      break;
    case 'linux':
      cache = '~/.cache/vrest';
      break;
  }
  return resolvePath(cache);
}

const bin = new BinWrapper()
  .src(`${base}/vrest_ng_cli_linux_${uver}`, "linuxx64")
  .src(`${base}/vrest_ng_cli_alpine_${uver}`, "linuxx64alpine")
  .src(`${base}/vrest_ng_cli_mac_${uver}`, "darwinx64")
  .src(`${base}/vrest_ng_cli_win_${uver}.exe`, "win32x64")
  .key(function(){
    var suffix = "";
    if(isNonGlibcLinux){
      suffix = "alpine";
    }
    return process.platform + archModule() + suffix;
  })
  .dest((cacheFolder && resolvePath(cacheFolder)) || defaultCache())
  .use(fileName);

bin
  .run(["--version"])
  .then(
    _ => spawn(bin.path(), process.argv.slice(2), { stdio: "inherit" }),
    e => {
      console.error(`Failed! ${e}`)
      process.exit(1);
    }
  );
