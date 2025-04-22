import User from "../models/UserModel.js";

const getUsers = async (request, response) => {
    const users = await User.getUsers();
    response.status(200).json(users);
}

const getUserById = async (request, response) => {
    const id = request.params.id;
    const user = await User.getUserById(id);
    if ( user) {
        response.status(200).json( user );
    } else {
        response.status(404).json({msg: 'No se encontró el usuario'});
    }
}

const addUser = async (request, response) => {
    const user = request.body;
    console.log({user});

    const doc = new User(user);
    await doc.save();

    response.json( { doc } );

    //const id = await userModel.addUser(user);
    //response.json( { id} );
}

const updateUser = async (request, response) => {
    response.json({});
}

const deleteUser = async (request, response) => {
    const id = request.params.id;
    const status = await User.deleteUserById(id);
    if ( status) {
        response.json( {msg: 'Usuario eliminado'} );
    } else {
        response.status(404).json({msg: 'No se encontro el usuario'});
    }
}

export { getUsers, getUserById, addUser, updateUser, deleteUser};

