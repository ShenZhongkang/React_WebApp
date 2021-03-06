const app = require('koa')();
const router = require('koa-router')();

// 首页 - 广告（超值特惠）
var homeAdData = require('./home/ad.js');
router.get('/api/homead', function *(next) {
  this.body = homeAdData;
});

// 首页 - 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js');
var homeListData1 = require('./home/list.js');
router.get('/api/homelist/:city/:page', function *(next) {
  const params = this.params;
  const paramsCity = params.city;
  const paramsPage = params.page;
  console.log('当前城市： ' + paramsCity);
  console.log('当前页数： ' + paramsPage);
  if(paramsCity == '深圳'){
    this.body = homeListData;
  }else if(paramsCity == '北京'){
    this.body = homeListData1;
  }else{
    this.body = homeListData;
  }
})

// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list.js');
router.get('/api/search/:page/:city/:category/:keyword', function *(next) {
  console.log('搜索结果');
  const params = this.params;
  const paramsPage = params.page;
  const paramsCity = params.city;
  const paramsCategory = params.category;
  const paramsKeyword = params.keyword;
  console.log('当前页数：' + paramsPage);
  console.log('当前城市：' + paramsCity);
  console.log('当前类别：' + paramsCategory);
  console.log('关键字：' + paramsKeyword);
  this.body = searchListData;
})

// 搜索结果页 - 搜索结果 - 两个参数
// restfull API：无状态API，后端什么状态都不保存，全部靠参数处理
// ?name=iwen&...   iwen/20
router.get('/api/search/:page/:city/:category', function *(next) {
  console.log('搜索结果页 - 搜索结果');
  // 参数
  const params = this.params;
  const paramsPage = params.page;
  const paramsCity = params.city;
  const paramsCategory = params.category;
  console.log('当前页数：' + paramsPage);
  console.log('当前城市：' + paramsCity);
  console.log('当前类别：' + paramsCategory);
  this.body = searchListData;
})

// 详情页 - 商户信息
const detailInfo = require('./detail/info.js');
router.get('/api/detail/info/:id', function *(next) {
    console.log('详情页 - 商户信息');
    const params = this.params;
    const id = params.id;
    console.log('商户id: ' + id);
    this.body = detailInfo;
})

// 详情页 - 用户评论
const detailComment = require('./detail/comment.js');
router.get('/api/detail/comment/:page/:id', function *(next) {
    console.log('详情页 - 用户点评');
    const params = this.params;
    const page = params.page;
    const id = params.id;
    console.log('商户id: ' + id);
    console.log('当前页数: ' + page);
    this.body = detailComment;
})

// 开启服务，生成路由
app.use(router.routes()).use(router.allowedMethods());
app.listen(8080, function () {
  console.log('Server is running.Port: 8080');
})