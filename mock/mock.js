var Mock = require("mockjs");

var Random = Mock.Random;

module.exports = function() {
  var data = {};
  data.user = {
    name: Random.cname(3),
    intro: Random.word(18)
  };
  return data;
};
