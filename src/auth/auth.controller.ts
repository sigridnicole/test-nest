import {
  Body,
  Controller,
  ParseIntPipe,
  Post,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
@Controller('auth') //global prefix route
export class AuthController {
  // NestJS dependency injection
  // private - shorthand for definition of this.authservice
  constructor(private authservice: AuthService) {}

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authservice.signup(dto);
  }

  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.authservice.signin(dto);
  }

  //Sample express access - not recommended (because you may want to change to another framework, example: fastify)
  //Instead of using the request body, nest js uses DTOs
  // @Post('express')
  // express(@Req() req: Request) {
  //   console.log(req.body);
  //   return this.authservice.signin();
  // }

  // SAMPLE VERBOSE PIPING, instead of doing this format, piping can be done inside the dto
  // @Post('signup-verbose-pipe') //POST auth/signup
  // signupVp(
  //   @Body('email') email: string,
  //   @Body('password', ParseIntPipe) password: string,
  // ) {
  //   //Using Nest Pipes
  //   console.log({
  //     email,
  //     typeofEmail: typeof email,
  //     typeofPassword: typeof password,
  //     password,
  //   });
  //   return this.authservice.signup();
  // }
}
