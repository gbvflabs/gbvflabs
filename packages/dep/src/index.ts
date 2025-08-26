import * as os from "node:os";
import * as url from "node:url";
import * as path from "node:path";
import * as fs from "node:fs";
import * as childProcess from "node:child_process";

import deepmerge from "deepmerge";
import minimist from "minimist";

// import glob from "glob";
import globAll from "glob-all";

import fsExtra from "fs-extra";

import simpleGit from "simple-git";
import shellQuote from "shell-quote";
import chalk from "chalk";
import boxen from "boxen";
import inquirer from "inquirer";

import * as tsMorph from "ts-morph";
import "@babel/types";
import * as babelParser from "@babel/parser";
import * as babelTraverse from "@babel/traverse";

import winston from "winston";
// import dotenv from "dotenv";

import unpluginAutoImportWebapck from "unplugin-auto-import/webpack";
import webpack from "webpack";
import { merge as webpackMerge } from "webpack-merge";

import htmlWebpackPlugin from "html-webpack-plugin";
import terserWebpackPlugin from "terser-webpack-plugin";
import { PurgeCSSPlugin as purgeCSSWebpackPlugin } from "purgecss-webpack-plugin";
import miniCssExtractPlugin from "mini-css-extract-plugin";
import cssMinimizerWebpackPlugin from "css-minimizer-webpack-plugin";
import compressionWebpackPlugin from "compression-webpack-plugin";
import copyWebpackPlugin from "copy-webpack-plugin";

import { BundleAnalyzerPlugin as webpackBundleAnalyzer } from "webpack-bundle-analyzer";
import speedMeasureWebpackPlugin from "speed-measure-webpack-plugin";
import webpackDashboard from "webpack-dashboard";

import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";
import tailwindcss from "tailwindcss";
import tailwindcssLineClamp from "tailwindcss-line-clamp";

export default {
  os,
  url,
  path,
  fs,
  childProcess,

  deepmerge,
  minimist,
  // glob,
  globAll,

  fsExtra,

  simpleGit,
  chalk,
  boxen,
  inquirer,
  shellQuote,

  babelParser,
  babelTraverse,
  tsMorph,

  // dotenv,
  winston,

  unpluginAutoImportWebapck,
  webpack,
  webpackMerge,
  htmlWebpackPlugin,
  terserWebpackPlugin,
  purgeCSSWebpackPlugin,
  miniCssExtractPlugin,
  cssMinimizerWebpackPlugin,
  compressionWebpackPlugin,
  copyWebpackPlugin,
  webpackBundleAnalyzer,
  speedMeasureWebpackPlugin,
  webpackDashboard,

  autoprefixer,
  postcssPresetEnv,
  tailwindcss,
  tailwindcssLineClamp,
};
