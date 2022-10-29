import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChats(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.id, param.url);
  }
  // 또는
  // getChats(@Query('perPage') perPage, @Query('page') page, @Param('id') id, @Param('url') url) {
  //   console.log(perPage, page);
  //   console.log(id, url);
  // }

  @Post(':id/chats')
  postChat() {}
}
