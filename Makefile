install: npm install

start:
	sudo npx babel-node src/bin/brain-games.js

publish:
	npm publish

lint:
	npx eslint .

even:
	sudo npx babel-node src/bin/brain-even.js

calc:
	sudo npx babel-node src/bin/brain-calc.js

gcd:
	sudo npx babel-node src/bin/brain-gcd.js

progress:
	sudo npx babel-node src/bin/brain-progression.js
