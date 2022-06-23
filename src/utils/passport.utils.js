import { Strategy } from "passport-local";
import passport from 'passport'
import bcrypt from "bcrypt";
import { UserModel } from "../modules/User.model.js";

passport.use(
    "signup",
    new Strategy(
      {
        passReqToCallback: true,
      },
      async (req, email, password, done) => {
        try {
          const userExists = await UserModel.findOne({ email });
          if (userExists) {
            console.log("Usuario existe");
            return done(null, false);
          }
          console.log("el usuario no existe en la base de datos")
          const newUser = {
            email,
            password: bcrypt.hashSync(password, bcrypt.genSaltSync(10), null),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            adress: req.body.adress,
            age: req.body.age,
            phone: req.body.phone,
            
          };
          const user = await UserModel.create(newUser);
          return done(null, user);
        } catch (error) {
          console.log(error);
        }
      },
    ),
  );

  passport.use(
    "login",
    new Strategy(async (userName, password, done) => {
      try {
        const user = await UserModel.findOne({ userName });
        if (!user) {
          console.log("Usuario no encontrado!");
          done(null, false);
        }
        const isValid = bcrypt.compareSync(password, user.password);
        if (isValid) {
          return done(null, user);
        } else {
          done(null, false);
        }
      } catch (error) {
        console.log(error);
        done(error);
      }
    }),
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
  
  passport.deserializeUser((id, done) => {
    UserModel.findById(id, done);
  });
  
  export default passport;