import { IsEmail, IsNotEmpty, MinLength, Matches } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty({
    message: 'Username required',
  })
  @MinLength(3, {
    message: 'Username Invalid',
  })
  username: string;

  @IsNotEmpty({
    message: 'Password required',
  })
  @MinLength(6, {
    message: 'Password is too short',
  })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password too weak',
  })
  password: string;

  tasks: any[];
}
