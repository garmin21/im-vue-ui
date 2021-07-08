module.exports = {
    lintOnSave: false, // 关闭 eslint检查
    publicPath: process.env.NODE_ENV === 'production'
    ? '/im-vue-ui/'
    : '/',
    productionSourceMap: false
};