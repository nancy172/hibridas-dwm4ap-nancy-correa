import User from "../models/UserModel.js";

const getUsers = async (request, response) => {
    const users = await User.find();
    response.status(200).json(users);
}

const getUserById = async (request, response) => {
    const id = request.params.id;
    const user = request.body;

    const userNew = await User.findById(id, user);
    if ( userNew) {
        response.status(200).json( userNew );
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
    const id = request.params.id;
    const user = request.body;

    const newUser = await User.findByIdAndUpdate(id, user, {new: true});

    if ( newUser) {
        response.json( {msg: 'Usuario actualizado', data :{newUser}} );
    } else {
        response.status(404).json({msg: 'No se encontro el usuario'});
    }

   
}

const deleteUser = async (request, response) => {
    const id = request.params.id;
    const status = await User.findByIdAndDelete(id);
    
    if ( status) {
        response.json( {msg: 'Usuario eliminado'} );
    } else {
        response.status(404).json({msg: 'No se encontro el usuario'});
    }
}

export { getUsers, getUserById, addUser, updateUser, deleteUser};

