import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import {
  ApiBadGatewayResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotAcceptableResponse,
  ApiNotImplementedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { UserDto } from 'src/common/dto/user.dto';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@ApiTags('USER')
@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // @ApiResponse({ status: 200, type: UserDto })
  // @ApiOkResponse 쓰면 status 알아서 200으로 됨
  @ApiOkResponse({ type: UserDto })
  @ApiInternalServerErrorResponse({ description: '서버 에러' })
  @ApiOperation({ summary: '내 정보 조회' })
  @Get()
  getUsers(@User() user) {
    // 참고) 테스트 코드를 잘 작성하려면 req, res를 숨기는 게 좋음 (안 쓰는 게 좋음, 방법을 찾아보자) -> 데코레이터 커스텀 하기!!
    return user;
  }

  @ApiOperation({ summary: '회원가입' })
  @Post()
  postUsers(@Body() data: JoinRequestDto) {
    this.usersService.postUsers(data.email, data.nickname, data.password);
  }

  @ApiOkResponse({ description: '성공', type: UserDto })
  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn(@User() user) {
    return user;
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connet.sid', { httpOnly: true });
    res.send('ok');
  }
}
