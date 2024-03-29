var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var passport = require('passport');
var gcal     = require('google-calendar');

passport.use(new GoogleStrategy({
	clientID: config.consumer_key,
	clientSecret: config.consumer_secret,
	callbackURL: "http://localhost:8082/auth/callback",
	scope: ['openid', 'email', 'https://www.googleapis.com/auth/calendar'] 
},
function(accessToken, refreshToken, profile, done) {
	
	google_calendar = new gcal.GoogleCalendar(accessToken);

	google_calendar.calendarList.list(function(err, calendarList) {
		
		
		
		google_calendar.events.list(calendarId, function(err, calendarList) {
			
			
		});
	});
	
	return done(null, profile);
}
));