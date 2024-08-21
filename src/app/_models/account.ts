import { Role } from './role';

export class Account {
    id: string;
    acc_email: string;
    acc_passwordHash: string;
    acc_firstname: string;
    acc_lastname: string;
    acc_pnumber: string;
    acc_gender: string; // New field for gender
    acc_image: string;
    acc_totalpoints: number = 0;
    acc_role: Role;
    jwtToken?: string;
}