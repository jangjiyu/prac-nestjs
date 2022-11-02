import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('WORKSPACE')
@Controller('api/workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkspaces() {}

  @Post()
  createWorkspace() {}

  @Get(':url/members')
  getAllMembersFromWorkspace() {}

  @Post(':url/members')
  inviteMembersToWorkspace() {}

  @Delete(':url/members/:id')
  kickMemberFromWorkspace() {}

  @Get(':url/members/:id')
  getMemberInfoInWorkspace() {}

  // api 명세 실수로 members로 하지 않고 users로 해버렸는데 이미 고치긴 늦었을 경우 -> 이전 사용자 편의는 무시하고 메이저 업데이트에서 수정을 하거나.. 그냥 남겨두거나.. 이미 먼 길을 와버린 경우엔 어쩔 수 없이 그냥 남겨두고 새로 수정한 건 추가하여 둘 다 사용함
  // -> Get(':url/members/:id'), Get(':url/users/:id') 둘 다 존재
  @Get(':url/users/:id')
  DEPRECATED_getMemberInfoInWorkspace() {
    this.getMemberInfoInWorkspace();
  }
}
