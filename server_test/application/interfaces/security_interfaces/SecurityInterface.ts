export interface SecurityInterface {
    authenticate(id:string,email:string,password:string):Promise<any>
    encryptPassword(password:string):Promise<any>
    comparePasswords(password:string,hashPassword:string):Promise<any>
}