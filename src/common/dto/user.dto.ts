// 인터페이스가 아닌 class로 만들어두면 스웨거 설정 및 validation등도 dto에서 가능
import { ApiProperty } from '@nestjs/swagger';
import { JoinRequestDto } from 'src/users/dto/join.request.dto';

export class UserDto extends JoinRequestDto {
  @ApiProperty({ example: 1, description: '아이디', required: true })
  id: number;
}
