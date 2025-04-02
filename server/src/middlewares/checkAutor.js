const { Event } = require('../../db/models');
async function checkAutor(req, res, next) {
  const { id } = req.params;
  const userId = res.locals.user.id;
  const targetEvent = await Event.findByPk(id);
  
  if (targetEvent && targetEvent?.userId === userId) return next();
  return res.sendStatus(403);
}
module.exports = checkAutor;
