const loadUsers = (userID, load, done) => {
  const completo = 0;
  var users = [];

  userID.forEach((id, index) => {
    load(id, (user) => {
      users[index] = user;
      if (++completo === userID.length) return done(users);
    });
  });
};

module.exports = loadUsers;