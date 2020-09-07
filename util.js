/**
 * 根据子级类型查找所有匹配的父级类型
 * id: 子级ID
 * data: 匹配数据
 * prop: 匹配的类型,默认用ID匹配
 */
export function getFathersById(id, data, prop = 'id') {
    var arrRes = []
    const rev = (data, nodeId) => {
        for (var i = 0, length = data.length; i < length; i++) {
            const node = data[i]
            if (node[prop] === nodeId) {
                arrRes.unshift(node[prop])
                return true
            } else {
                if (node.children && node.children.length) {
                    if (rev(node.children, nodeId)) {
                        arrRes.unshift(node[prop])
                        return true
                    }
                }
            }
        }
        return false
    }
    rev(data, id)
    return arrRes
}
/**
 * 处理传给后台ID数据,只取最后一级id
 * @param {*} arr 需要处理的数据
 * @param {*} type 1单选 2多选
 */
export function handleId(arr, type) {
    if (type === 1) {
        if (arr.length) {
            return arr[arr.length - 1]
        } else return ''
    } else {
        if (arr.length) {
            const newArr = []
            arr.some(item => {
                newArr.push(item[item.length - 1])
            })
            return newArr
        } else return []
    }
}






export function listToTree(data, parent) {
    let vm = this;
    var tree = [];
    var temp;
    for (var i = 0; i < data.length; i++) {
        if (data[i].parent == parent) {
            var obj = data[i];
            temp = filterArray(data, data[i].id);
            if (temp.length > 0) {
                obj.children = temp;
            }
            tree.push(obj);
        }
    }
    return tree;
}


console.log(filterArray(list))
