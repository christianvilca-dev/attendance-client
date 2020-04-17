export class HelloWorld {
    name: string // ts es tipado por lo que debemos especificar el tipo de dato
  
    constructor(name: string) {
      this.name = name
    }
  
    greet(): string {
      return `¡Hola Mundo, Webpack con ${this.name}!`
    }
  }