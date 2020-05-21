console.log(
	`To use the Luscious 'boilerplate' code to get started,\n` +
  `copy the scaffold directory into your project:\n` +
  `❗️ To replace your entire './styles/' folder:\n` +
  `  ❯  cp -r ./node_modules/luscious/scaffold/ ./styles\n` +
  `❗️ To add the scaffold to './styles/ folder:\n` +
	`  ❯  cp -r ./node_modules/luscious/scaffold ./styles\n\n` +

	`To use the same linting setup:\n` +
	`❗️ Copy the linter configs to your root directory:\n` +
	`  ❯  cp -r ./node_modules/luscious/.sasslint.yml ./.sasslint.yml\n` +
	`  ❯  cp -r ./node_modules/luscious/.sasslint-fix.yml ./.sasslint-fix.yml\n` +
	`❗️ You can also add these scripts to your 'package.json file:\n` +
	`   "scripts": {\n` +
	`      "lint": "sass-lint -c .sasslint.yml '**/*.s+(a|c)ss' -v -q",\n` +
	`      "fix": "sass-lint-auto-fix -c .sasslint-fix.yml '**/*.s+(a|c)ss' -v -q"\n` +
	`   }`
)
