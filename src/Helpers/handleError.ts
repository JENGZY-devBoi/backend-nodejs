import { Response } from "express"
import { ResponseApi } from "../interfaces"

export const handleError = async(error: Error, response: Response) => {
    const res: ResponseApi<null> = {
        detail: {
            success: false,
            code: '9999',
            message: error.message
        },
        result: {
            data: null
        }
    };

    response.status(400).json(res);
}