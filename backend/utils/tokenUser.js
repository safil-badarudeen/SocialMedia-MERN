const createTokenUser = (user) => {
  return {
    userId: user._id,
    name: user.name,
    email: user.email,
    profile: user.profile,
    mobilenumber: user.mobilenumber,
    friends:user.friends,
    pendingFriends:user.pending
  };
};

module.exports = { createTokenUser };
