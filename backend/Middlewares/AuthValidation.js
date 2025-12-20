//adding server site validation

import joi from "joi";




const logInValidation = (req, res, next) => {
    const schema = joi.object({

        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required(),

    });

    const  {error} = schema.validate(req.body);

    if(error){//if error comes
        return res.status(400)
         .json({message: "bad request: ", error})
    }
    next();
}


export  { logInValidation };