# HOWTO Publish

Publish instructions.

## Update Changelog

Add changes to `CHANGELOG.md`.

## Update version

Update version to "X.Y.Z".

`git commit -a -m "vX.Y.Z"`

`git tag vX.Y.Z`

## Build

`npm run build`

## Publish

`npm login`

`npm publish --access public`
