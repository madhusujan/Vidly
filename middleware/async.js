module.exports = function aysncMiddleware(handler){
    return async (req, res, next) => {
      try{
        await handler(req, res);
      }
      catch{
        next(err);
      }
    }
  }