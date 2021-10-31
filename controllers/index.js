const mongoose = require("mongoose");
const Answer = require("../models/answer");

const dashboard = (_req, res, next) => {
  res.render("index");
};

const showReferencesPage = (_req, res) => {
  res.render("references");
};

const showAboutPage = (_req, res) => {
  res.render("about");
};

const showPrecovidPage = (_req, res) => {
  res.render("precovid");
};

const showPostCovidPage = (_req, res) => {
  res.render("postcovid");
};

const showEndOfSurveyPage = async (_req, res) => {
  const save_Data = _req.query;
  const data = { username: save_Data.username, oneoption: JSON.parse(save_Data.oneoption), twooption:JSON.parse(save_Data.twooption)}
  const Newdata = new Answer(data)
  const result = await Newdata.save()
  if (result == "") {
      res.send({
          status: false
      })
  }
  else {
    res.render("endofsurvey");
  }
};

module.exports = { dashboard, showReferencesPage, showAboutPage, showPrecovidPage, showPostCovidPage, showEndOfSurveyPage };
