import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { FormStrategy } from "remix-auth-form";
import bcrypt from 'bcrypt'
import { db } from '~/utils/db'
import { User } from '~/interfaces/user'

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session

// todo: change 'any' to 'User'
export let authenticator = new Authenticator<any>(sessionStorage);

// Tell the Authenticator to use the form strategy
authenticator.use(
    new FormStrategy(async ({ form }) => {
        let email = form.get("email");
        let password = form.get("password");
        let user = await login(email, password);
        // the type of this user must match the type you pass to the Authenticator
        // the strategy will automatically inherit the type if you instantiate
        // directly inside the `use` method
        return user;
    }),
    // each strategy has a name and can be changed to use another one
    // same strategy multiple times, especially useful for the OAuth2 strategy.
    "user-pass"
);

export async function login(email: any, password: any) {
    let user;

    user = await db.master_User.findUnique({
        where: {
            email
        }
    })
   
    if (!user) return null

    // Check password
    const isCorrectPassword = await bcrypt.compare(password, user.password)

    if (!isCorrectPassword) return null

    return user
}