import { Controller, Get } from "routing-controllers";

@Controller()
export class HelloController {
  @Get()
  sayHello() {
    return "Hello world!";
  }
}
