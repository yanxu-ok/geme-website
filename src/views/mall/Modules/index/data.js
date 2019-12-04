
const _import_views = (path) => () => import(`_v/mall/Modules/index/${path}`)
// 轮播图
export var lunBoTu = _import_views("mallHomeLeft/lunBoTu")
// 销售冠军
export var xiaoShou = _import_views("mallHomeRight/xiaoShou")
// 商城公告
export var shopNotice = _import_views("mallHomeRight/shopNotice")
// 最近兑换
export var lately = _import_views("mallHomeRight/lately")
// 商品排行榜
export var rankingList = _import_views("mallHomeRight/rankingList")
// 推荐商品
export var shop = _import_views("mallHomeLeft/shop")
// 热销商品
export var hotShop = _import_views("mallHomeUp/hotShop")
// 手机配件
export var phone = _import_views("mallHomeUp/phone")
// 虚拟商品
export var mallHomeUpRight = _import_views("mallHomeUp/mallHomeUpRight")
// 时尚数码
export var fashion = () => _import_views("mallHomeBottom/fashion")