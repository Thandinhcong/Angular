export interface IUser {
    name: string,
    maSV: string | number,
    age: number,
    gender: string,
}
export interface Signin {
    email: string,
    password: string | number,
}
export interface Signup {
    id: number,
    name: string,
    email: string,
    password: string,
    confirmPassWord: string,
}