import * as userService from '../service/userService'

export async function getUserByUserName (username) {
  return userService.getUserByUserName(username)
}

export async function getAllUsers () {
  return userService.getAllUsers()
}

export async function addUser (user) {
  return userService.addUser(user)
}

export async function delectUser (_id) {
  return userService.deleteUser(_id)
}

export async function userExit (username) {
  return userService.userExit(username);
}

export async function getUserById (_id) {
  return userService.getUerById(_id);
}

export async function updateUser (_id, user) {
  return userService.updateUser(_id,user);
}

//todo  refactor add pagenation
export async function searchUser(param){
  return userService.searchUser(param)
}