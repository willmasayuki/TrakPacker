import { 
    addNewUser, 
    getUsers,
    getUserWithID,
    updateUser,
    deleteUser 
} from '../controllers/userControllers';

const routes = (app) => {
    app.route('/users')
        // GET endpoint
        .get(getUsers)
        // POST endpoint
        .post(addNewUser);

    app.route('/user/:UserId')
        // Get specific user
        .get(getUserWithID)
        // Update a specific player
        .put(updateUser)
        // Delete a specific player
        .delete(deleteUser);
}

export default routes;