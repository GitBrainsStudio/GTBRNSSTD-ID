import { RoleDto } from "./role-dto";

export interface AccountDto 
{
    id:string
    login:string
    roles:RoleDto[]
}