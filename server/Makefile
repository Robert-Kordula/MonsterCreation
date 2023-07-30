up-dev: 
	docker compose -f docker-compose.dev.yml up --build
up-test: 
	docker compose -f docker-compose.dev.yml run --build server npm run test
up-prod: 
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
down:
	docker-compose down