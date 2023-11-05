CURRENT_DIR=$(patsubst %/,%,$(dir $(realpath $(firstword $(MAKEFILE_LIST)))))
ROOT_DIR=$(CURRENT_DIR)
CURRENT_USER=
DOCKER_NAME=vite_docker
DOCKER_COMPOSE?=docker-compose
DOCKER_EXEC_TOOLS_APP=$(CURRENT_USER) docker exec -it $(DOCKER_NAME) sh
NODE_INSTALL="npm i"
SERVER_RUN="npm run dev"
SERVER_BUILD="npm run build"
old_css_filename="src/css/index-*.css"
new_css_filename="src/css/index.css"

.PHONY: build install dev up start first stop restart clear

build:
	$(DOCKER_COMPOSE) up --build --no-recreate -d


install:
	$(DOCKER_EXEC_TOOLS_APP) -c $(NODE_INSTALL)


dev:
	$(DOCKER_EXEC_TOOLS_APP) -c $(SERVER_RUN)


up:
	$(DOCKER_COMPOSE) up -d

server_build:
	$(DOCKER_EXEC_TOOLS_APP) -c $(SERVER_BUILD)

neat_place:
	$(DOCKER_EXEC_TOOLS_APP) -c "rm -rf dist && rm -rf src/css && mkdir src/css && touch src/css/index.css"

#copy_css:
#	$(DOCKER_EXEC_TOOLS_APP) -c "cp -r dist/assets src/css && sh -c 'cp src/css/assets/index-*.css src/css/index.css' && rm -rf src/css/assets"
#
#replace_css_import:
#	$(DOCKER_EXEC_TOOLS_APP) -c "echo 'import \"./css/index.css\"' | cat - src/main.tsx > src/main.tsx.tmp && mv src/main.tsx.tmp src/main.tsx"
#
#comment_css_import:
#	$(DOCKER_EXEC_TOOLS_APP) -c "sed -i 's/import \"css\/index.css\"//g' src/main.tsx"

install_sass:
	$(DOCKER_EXEC_TOOLS_APP) -c "npm install -g sass"

run_sass:
	$(DOCKER_EXEC_TOOLS_APP) -c "sass src/main.scss:src/css/index.css"

watch_sass:
	$(DOCKER_EXEC_TOOLS_APP) -c "sass --watch src/main.scss:src/css/index.css"

start: up dev

first: build install dev

npm_build: server_build

nassim_style: neat_place install_sass run_sass

stop:	$(ROOT_DIR)/docker-compose.yml
	$(DOCKER_COMPOSE) kill || true
	$(DOCKER_COMPOSE) rm --force || true


restart: stop start dev


clear: stop	$(ROOT_DIR)/docker-compose.yml
	$(DOCKER_COMPOSE) down -v --remove-orphans || true