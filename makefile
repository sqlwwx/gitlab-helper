RELEASES = patch minor major
.PHONY: $(RELEASES)
$(RELEASES):
	npx standard-version --release-as $@
	git push --follow-tags origin master
	make release

.PHONY: release
release:
	rm -rf dist
	git worktree prune
	@$(eval PACKAGE_VERSION=$(shell node -p "require('./package.json').version"))
	pnpm i
	git worktree add -B dist dist origin/dist
	pnpm build
	cp CHANGELOG.md dist/
	cd dist && \
	git checkout -b tmp && \
	git add --all && \
	git commit -am 'build: release v$(PACKAGE_VERSION)' && \
	git checkout dist && \
	git checkout tmp . -p && \
	git commit -am 'build: merge v$(PACKAGE_VERSION)' && \
	git branch -D tmp
	git push
