import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getUsers() {
    return [
      { id: 1, name: "user" },
      { id: 2, name: "user1" },
    ];
  }
}
