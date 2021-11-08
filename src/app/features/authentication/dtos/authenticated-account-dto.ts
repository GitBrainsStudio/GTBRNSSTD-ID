import { AccountDto } from "./account-dto";

export interface AuthenticatedAccountDto
{
    access_token:string
    account:AccountDto
}