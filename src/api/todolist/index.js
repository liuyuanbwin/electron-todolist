/*
 * @Description: 
 * @Version: 
 * @Author: liu
 * @Date: 2020-07-04 11:27:26
 */ 
const {get, post} = require('../../tools/server')
export function getTodoList(){
    return get('/todolist')
}
export function addItem(data){
    return post('/todolist/add',data)
}

export function updateItem(data){
    return post('/todolist/update',data)
}