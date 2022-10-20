#!/usr/bin/env node

const {
	program
} = require("commander")
const inquirer = require('inquirer');
const chalk = require("chalk")
const camelcase = require("camelcase")
inquirer.prompt([{
	type: 'input',
	message: '请输入要更改的key,以[:|-|_|#]分割',
	name: 'name'
}]).then((answer) => {
	if (['', null, undefined].includes(answer.name)) {
		console.log(chalk.red("请输入正确的key!")) 
		return
	}
	const splitArray = answer.name.split(/[:_\-\#]/)
	console.log(chalk.blue(camelcase(splitArray,{pascalCase:true}))) 
})

