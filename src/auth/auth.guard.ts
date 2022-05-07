import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '../auth/constants';
import { UsersService } from '../users/users.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(@Inject(UsersService) private usersService: UsersService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const Response = context.switchToHttp().getResponse();

    try {
      const decoded = await jwt.verify(
        request.headers.token,
        jwtConstants.secret,
      );

      const user = await this.usersService.findOne(decoded.id);
      const userRole = JSON.parse(user.rights);

      switch (request.url.split('/')[1]) {
        case 'dashboard':
          return true;
          break;
        case 'ciro':
          const ciroRole = userRole.ciro;
          if (ciroRole) {
            return true;
          } else {
            return false;
          }
          break;
        case 'categories':
          const categoryRole = userRole.categories;
          if (categoryRole) {
            return true;
          } else {
            return false;
          }
          break;
        case 'expenses':
          const expensesRole = userRole.expenses;
          if (expensesRole) {
            return true;
          } else {
            return false;
          }
          break;
        case 'products':
          const productsRole = userRole.products;
          if (productsRole) {
            return true;
          } else {
            return false;
          }
          break;
        case 'reports':
          const reportsRole = userRole.reports;
          if (reportsRole) {
            return true;
          } else {
            return false;
          }
          break;
        case 'settings':
          const settingsRole = userRole.settings;
          if (settingsRole) {
            return true;
          } else {
            return true;
          }
          break;
        case 'staff':
          const staffRole = userRole.staff;
          if (staffRole) {
            return true;
          } else {
            return false;
          }
          break;
        case 'typeexpenses':
          const typeexpensesRole = userRole.typeexpenses;
          if (typeexpensesRole) {
            return true;
          } else {
            return false;
          }
          break;
        case 'users':
          const usersRole = userRole.users;
          if (usersRole) {
            return true;
          } else {
            return false;
          }
          break;
      }
    } catch (e) {
      return false;
    }
  }
}
