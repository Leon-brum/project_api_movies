import { JwtPayload, Secret, SignOptions, sign, verify } from 'jsonwebtoken';
import 'dotenv';

export default class JWT {
  private static secret: Secret = process.env.JWT_SECRET || 'jwt_secret';

  private static jwtConfig: SignOptions = {
    algorithm: 'HS256', expiresIn: '1d',
  };

  static sign(payload: JwtPayload): string {
    return sign(payload, JWT.secret, JWT.jwtConfig);
  }
}
