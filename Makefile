# Makefile
#
# Targets:
#   build-image
#   release

# Make release, must pass version, e.g. make release VERSION=v0.1.0
.PHONY: release
release:
	Docker login cargo.caicloudprivatetest.com -uadmin -pPwd123456
	PUSH_TO_REGISTRY=Y	./scripts/build-image.sh	$(VERSION)
