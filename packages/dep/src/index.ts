import * as os from "node:os";
import * as url from "node:url";
import * as path from "node:path";
import * as fs from "node:fs";
import * as childProcess from "node:child_process";
export { os, url, path, fs, childProcess };

export { default as deepmerge } from "deepmerge";
export { default as minimist } from "minimist";
export * as globby from "globby";
export { default as fsExtra } from "fs-extra";
export { default as yargs } from "yargs";
export { default as yaml } from "yaml";

export { default as simpleGit } from "simple-git";
export { default as shellQuote } from "shell-quote";
export { default as chalk } from "chalk";
export { default as boxen } from "boxen";
export { default as inquirer } from "inquirer";

export * as tsMorph from "ts-morph";
export * as babelTypes from "@babel/types";
export * as babelParser from "@babel/parser";
export { default as babelTraverse } from "@babel/traverse";

export { default as winston } from "winston";

export { default as unpluginAutoImportWebapck } from "unplugin-auto-import/webpack";
export { default as webpack } from "webpack";
export { merge as webpackMerge } from "webpack-merge";

export { default as htmlWebpackPlugin } from "html-webpack-plugin";
export { default as terserWebpackPlugin } from "terser-webpack-plugin";
export { PurgeCSSPlugin as purgeCSSWebpackPlugin } from "purgecss-webpack-plugin";
export { default as miniCssExtractPlugin } from "mini-css-extract-plugin";
export { default as cssMinimizerWebpackPlugin } from "css-minimizer-webpack-plugin";
export { default as compressionWebpackPlugin } from "compression-webpack-plugin";
export { default as copyWebpackPlugin } from "copy-webpack-plugin";

export { BundleAnalyzerPlugin as webpackBundleAnalyzer } from "webpack-bundle-analyzer";
export { default as speedMeasureWebpackPlugin } from "speed-measure-webpack-plugin";
export { default as webpackDashboard } from "webpack-dashboard";

export { default as autoprefixer } from "autoprefixer";
export { default as postcssPresetEnv } from "postcss-preset-env";
export { default as tailwindcss } from "tailwindcss";
export { default as tailwindcssLineClamp } from "tailwindcss-line-clamp";
