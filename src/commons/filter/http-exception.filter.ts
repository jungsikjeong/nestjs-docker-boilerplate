import { Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException) // 이제부터 HttpException 에러나면 이 함수를 실행시켜줘야돼 라는 뜻으로 이거 작성
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException) {
    const status = exception.getStatus();
    const message = exception.message;

    console.log('=================');
    console.log('예외가 발생했어요!');
    console.log('예외 내용:', message);
    console.log('예외 코드:', status);
    console.log('=================');
  }
}
