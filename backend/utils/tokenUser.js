const createTokenUser = (user) => {
  return {
    userId: user._id,
    username:user.username,
    name: user.name,
    email: user.email,
    profile: user.profile,
    mobilenumber: user.mobilenumber,
    following:user.following,
    followers:user.followers
  };
};

module.exports = { createTokenUser };
