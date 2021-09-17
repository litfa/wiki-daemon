# xingWiki

可快速搭建 wiki,个人博客等

该项目正在开发中，敬请期待

状态码：
200: 正常
403: 权限不足
500: 未知错误


用户状态  
用户权限说明：  
0: 不可用  
1：正常  
2: 封禁  
3: 删除

用户权限(权限可在配置文件修改)  
admin: 最高权限   
operator: 管理员  
member: 成员  


文章状态  
0: 不可用(可能是未审核)  
1: 正常  
2: 封禁(不可见)  
3: 删除(删除不删除数据库 仅隐藏文章)
只要不是1就不展示


# 功能列表
- 文章通过id访问 √
- 用户id √
- 文章状态 √
- 删除文章 √
- 用户状态 √
- 后台管理
- 发布文章 保存草稿
- 编辑文章 √
- 编辑记录 √
- 文章封面
- 用户不存在的处理 √