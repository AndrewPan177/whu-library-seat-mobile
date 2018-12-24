import Mock from 'mockjs'
import gitcontentsApi from './gitcontents.api'
import usageApi from './usage.api'
import libraryApi from './library.api'
import githubApi from './github.api'
import urls from '../urls'

Mock.setup({
  timeout: '500-1000'
})

// 用户验证
Mock.mock(urls.gitcontents.validateUser.regular, urls.gitcontents.validateUser.method, gitcontentsApi.validateUser)

// 公告
Mock.mock(urls.gitcontents.announce.regular, urls.gitcontents.announce.method, gitcontentsApi.announce)

// 移动端检查更新
Mock.mock(urls.gitcontents.checkUpdateMobile.regular, urls.gitcontents.checkUpdateMobile.method, gitcontentsApi.checkUpdateMobile)

// GitHub id 黑名单
Mock.mock(urls.gitcontents.blacklist.regular, urls.gitcontents.blacklist.method, gitcontentsApi.blacklist)

// 禁用软件
Mock.mock(urls.gitcontents.ban.regular, urls.gitcontents.ban.method, gitcontentsApi.ban)

// 得到 GitHub 用户信息
Mock.mock(urls.githubApi.getUserInfo.regular, urls.githubApi.getUserInfo.method, githubApi.getUserInfo)

// 检查是否点星
Mock.mock(urls.githubApi.checkStared.regular, urls.githubApi.checkStared.method, githubApi.checkStared)

// 登录状态
Mock.mock(urls.usage.loginState.regular, urls.usage.loginState.method, usageApi.loginState)

// 抢座状态
Mock.mock(urls.usage.grabState.regular, urls.usage.grabState.method, usageApi.grabState)

// 登录
Mock.mock(urls.library.Login.regular, urls.library.Login.method, libraryApi.Login)

// 得到可以使用的房间信息
Mock.mock(urls.library.FreeFilters.regular, urls.library.FreeFilters.method, libraryApi.FreeFilters)

// 得到房间详细信息
Mock.mock(urls.library.RoomStats.regular, urls.library.RoomStats.method, libraryApi.RoomStats)

// 验证 token 是否可用
Mock.mock(urls.library.ValidateToken.regular, urls.library.ValidateToken.method, libraryApi.ValidateToken)

// 得到位置详细信息
Mock.mock(urls.library.LayoutByDate.regular, urls.library.LayoutByDate.method, libraryApi.LayoutByDate)

// 按时间搜索位置
Mock.mock(urls.library.SearchSeat.regular, urls.library.SearchSeat.method, libraryApi.SearchSeat)

// 预约位置
Mock.mock(urls.library.Book.regular, urls.library.Book.method, libraryApi.Book)

// 取消预约
Mock.mock(urls.library.Cancel.regular, urls.library.Cancel.method, libraryApi.Cancel)

// 得到用户信息
Mock.mock(urls.library.User.regular, urls.library.User.method, libraryApi.User)

// 得到预约历史
Mock.mock(urls.library.History.regular, urls.library.History.method, libraryApi.History)

// 终止使用
Mock.mock(urls.library.Stop.regular, urls.library.Stop.method, libraryApi.Stop)
