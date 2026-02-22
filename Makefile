IMAGE := react-build

all: build

build:
	@docker build -t $(IMAGE) .
	@id=$$(docker create $(IMAGE)); \
	docker cp $$id:/site/dist ./out; \
	docker rm $$id

dev:
	npm run dev

clean:
	@rm -rf out

.PHONY: all build dev clean
