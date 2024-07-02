import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// import { KakaoStrategy } from 'passport-kakao';  extends PassportStrategy(KakaoStrategy) {}

export class JwtAccessStrategies extends PassportStrategy(Strategy, 'access') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET_KEY, // secretKey
    });
  }

  validate(payload) {
    console.log('payload::', payload);
    // console.log(payload); // { sub: userId }
    // req.user ={sub:userId} 로 저장이 됨

    return {
      id: payload.sub,
    };
  }
}
