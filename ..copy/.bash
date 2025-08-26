# PKG=@scope/your-pkg
# TAG=latest
# VER=$(node -p "require('./package.json').version")

# if npm view "$PKG" version >/dev/null 2>&1; then
#   # 包已存在：版本存在则打标签；不存在会报错（需先发布该版本）
#   npm dist-tag add "$PKG@$VER" "$TAG"
# else
#   # 包不存在：先发布
#   npm publish --access public --tag "$TAG"
# fi