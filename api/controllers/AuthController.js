/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	 index: function (req, res) {
    var email = req.param('email');
    console.log('authcontroller. veriffica email passata');
    console.log(email)
    var password = req.param('password');
    //var password = 'test'
    console.log(password)

    if (!email || !password) {
      return res.json(401, {err: 'email and password required'});
    }
 		Users.findOne({email: email}, function (err, user) {
      if (!user) {
        return res.json(401, {err: 'invalid email or password ramo not user'});
      }

      Users.comparePassword(password, user, function (err, valid) {
        if (err) {
          return res.json(403, {err: 'forbidden'});
        }

        if (!valid) {
          return res.json(401, {err: 'invalid email or password'});
        } else {
          res.json({
            user: user,
            token: jwToken.issue({id : user.id })
          });
        }
      });
    })
 }
};
