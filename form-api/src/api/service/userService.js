
const User = require('../models/user');



/**
     * this method should be use to save/register user.
     * @return  created User.
     * @param User object.
*/
export async function addUser (user) {

    const { username, email, password } = user;

    user = new User({
      username,
      email,
      password
     });
    
    let createdUser = await user.save();
    return createdUser 
}

 /**
     * this method should be use to check if a user exit in the  database.
     * @return  true if user exists in the database
     * @param username
     * 
 */
export async function userExit(username) {

     let userExit = await User.exists({username})
     return userExit;
}

/**
     * this method should be use to get a user by username.
     * @return   user
     * @param username
     * 
   */
export async function getUserByUserName(username){

  let user = await User.findOne({username}).select('-password');
  return user;
}


/**
     * this method should be use to get all users.
     * 
   */
export async function getAllUsers () {
  let users =  User.find().select('-password')
  return users
}

/**
     * this method should be use to delete a user by username.
     * @return user
     * @param id
     * 
*/

export async function deleteUser (_id) {
  try {
    await User.deleteOne({_id});
  } catch (error) {
    throw error;
  }
  
}


/**
     * this method should be use to get a user by id.
     * @return user
     * @param id
     * 
*/
export async function getUerById (_id) {
  try {
    let user =  await User.findById({_id}).select('-password');
    return user
  } catch (error) {
    throw error;
  }
  
}

/**
     * this method should be use to update a user.
     * @return  updatedUser
     * @param  id, user
     * 
   */
export async function updateUser (_id, user) {

  try {
  
      let payload =  {

        username:user.username,
        password: user.password,
         email:user.email,
         status:user.status,
         datecreated:user.datecreated
         
        } 
        
     await User.update({_id},{payload},{upsert: true});
    const updatedUser = getUerById(_id);
    return updatedUser;

  } catch (error) {
    throw error
  }
}

// export async function search(param) {
//   // todo refator this method to use pagenation
//   param.toLowerCase()
//  let users =  await User.find({param:param})
//  return users
// }