import { Injectable } from 'moonshard';

@Injectable()
export class AppService {
  helloWorld() {
    return 'hello world!';
  }
}