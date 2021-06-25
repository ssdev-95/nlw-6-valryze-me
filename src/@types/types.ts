export interface IUser {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

export interface IUserAuthServiceProps {
    email: string;
    password: string;
}

export interface IComplimentServiceProps {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

export interface IPayload {
    sub: string;
}