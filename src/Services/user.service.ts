import { Request } from "express";
import { UserDto, ResponseApi } from "../interfaces";
import { UserModel } from "../Modules/Schemas";


export const createUser = async (request: Request) => {
    const { firstname, lastname, email, password } = request.body;
    
    const userCreate = await UserModel.create<UserDto>({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
    });
    
    const response: ResponseApi<UserDto> = {
        detail: {
            success: true,
            code: '0000',
            message: 'Create new user success'
        },
        result: {
            data: userCreate
        }
    };

    return response;
}

export const getAllUser = async () => {
    const allUsers = await UserModel.find<UserDto>();
    
    const response: ResponseApi<UserDto[]> = {
        detail: {
            success: true,
            code: '0000',
            message: 'Get all users success'
        },
        result: {
            data: allUsers
        }
    };

    return response;
}

const UserService = {
    createUser,
    getAllUser
};

export default  UserService;