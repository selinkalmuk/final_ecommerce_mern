const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//Kullanıcı verisini saklamak içim nir veri tabanı modeli kullan.
const User = require('../models/User');

passport.use(new GoogleStrategy({
	clientID: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	callbackURL:"/api/auth/google/callback"
},
async(accessToken,  refreshToken, profile, done) => {
	try{
	// Kullancı veritabanı kontrol edilir veya yeni bir kullanıcı oluşturulur.
		let user = await User.findOne({googleId: profile.id});
		if(!user){
			user = await User.create({
				googleId:profile.id,
				name: profile.displayName,
				email: profile.emails[0].value,
				profilePicture: profile.photos[0].value
			});
		}
		done(null, user);
	}catch(err){
	done(err, null);
}
}
));

//Kullanıcı oturumu için seralize ve deserialize 
passport.serializeUser((user, done) => {
    done(null, user.id);
}); 

passport.deserializeUser(async(id, done)=>{
        const user = await User.findById(id);
        done(null, user);
});

