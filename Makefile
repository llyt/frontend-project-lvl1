install: npm install

start:
	sudo npx babel-node src/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
