import { IsEmail, IsNotEmpty, IsString } from 'class-validator';


//With class validator
export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}


//Interface dto Version
// export interface AuthDto {
//   email: string,
//   password: string
// }