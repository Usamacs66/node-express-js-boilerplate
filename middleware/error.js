class httpError {
    constructor(message,code){
        this.message = message;
        this.code = code;
    }
    static generalError(message){
       return new httpError(message,500);
    }

    static badRequestError(message){
        return new httpError(message,400);
     }
     static pathNotFound(message){
        return new httpError(message,404);
     }
     static forbidden(message){
        return new httpError(message,403);
     }
     static unauthorized(message){
        return new httpError(message,401);
     }
     static conflict(message){
      return new httpError(message,409);
     }
}
module.exports = httpError;