# Description

This is a  System Information CLI that accepts commands and prints runtime information.

## Commands Supported

* `task1 --version` : To get node version of CLI
* `task1 --memory` : To get details of memory Usage
* `task1 --OS` : To get Operarting System
* `task1 --environment` : To get current mode
* `task1 --dir` : To get pwd of the CLI

## To Install

1. Click on this link : https://vscode.dev/github/christojose-vonnue/Phase2/tree/master/Day1
2. Download the folder Day1
3. Run these following commands in your terminal to set up node modules
4. Run `npm --version` , if a valid version number exist, follow next step
5. Run `npm install -D @types/node@^26.6.2 typescript@^7.0.2 vitest@^5.0.1` to download dependencies 
6. Run `npm link` 
7. Run `task1` <br>
If <span style="color:red"> Permission Denied </span> pops up<br>
run `chmod +x <path_to_your_cli>`

> **Note** <br>
> If  `npm --version` is unavailable , follow the instructions in the link below to download Node.js, npm and nvm
> https://nodejs.org/en/download
