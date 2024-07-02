import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';

export class JwtRefreshStrategies extends PassportStrategy(
  Strategy,
  'refresh',
) {
  constructor() {
    super({
      jwtFromRequest: (req) => {
        const cookie = req.headers.cookie; // refreshToken='rsdfsdf'
        const refreshToken = cookie.toLowerCase().replace('refreshToken=', ''); // 'token'
        return refreshToken;
      },
      secretOrKey: process.env.JWT_REFRESH_KEY, // secretKey
    });
  }

  validate(payload) {
    console.log('payload::', payload);

    return {
      id: payload.sub,
    };
  }
}
