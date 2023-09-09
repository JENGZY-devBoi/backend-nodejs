import { Response, Request } from "express";
import { UserService } from "../Services";
import { handleError } from "../Helpers/handleError";

export const createUser = async(request: Request, response: Response) => {
    try {
        const res = await UserService.createUser(request);
        
        response.status(201).json(res);
    } catch(error) {
        handleError(error as Error, response);
    }
}

export const getAllUser = async(request: Request, response: Response) => {
    try {
        const res = await UserService.getAllUser();
        
        response.status(200).json(res);
    } catch(error) {
        handleError(error as Error, response);
    }
}

const UserControllers = {
    createUser,
    getAllUser
};


export default UserControllers;