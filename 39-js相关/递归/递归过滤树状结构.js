// 菜单列表
const menuList = [{
    name: '系统管理',
    code: 'system_manage',
    children: [{
        name: '⽤户管理',
        code: 'user_manage',
        children: [{
            name: '添加⽤户',
            code: 'add_user'
        }, {
            name: '编辑⽤户',
            code: 'edit_user'
        }, {
            name: '删除⽤户',
            code: 'del_user'
        }]
    }, {
        name: '⾓⾊管理',
        code: 'role_manage',
        children: [{
            name: '添加⾓⾊',
            code: 'add_role'
        }]
    }]
}, {
    name: '业务管理',
    code: 'bus_manage',
    children: [{
        name: '流程管理',
        code: 'process_manage'
    }]
}, {
    name: '订单管理',
    code: 'order_manage'
}]
// 权限列表
const myMenuCode = ['system_manage', 'user_manage', 'add_user', 'order_manage']
const filterMenu = (menuList, menuCode) => {
    return menuList.filter(item => {
        return menuCode.indexOf(item.code) > -1
    }).map(item => {
        item = Object.assign({}, item)
        if (item.children) {
            item.children = filterMenu(item.children, menuCode)
        }
        return item
    })
}
// 过滤后的菜单
const myMenu = filterMenu(menuList, myMenuCode)
console.log(myMenu)
