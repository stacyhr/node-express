const express = require("express");
const partnersRouter = express.Router();

partnersRouter
  .route("/:partnerId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res) => {
    res.end(`Will send partner ${req.params.partnerId} to you`);
  })

  .post((req, res) => {
    res.end(
      `Will add the partner: ${req.params.partnerId} with name ${req.body.name} with description: ${req.body.description}`
    );
  })

  .put((req, res) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported on ${req.params.partnerId}`);
  })

  .delete((req, res) => {
    res.end(`Deleting partner: ${req.params.partnerId}`);
  });

partnersRouter
  .route("/")

  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res) => {
    res.end("Will send all the partnerd to you");
  })

  .post((req, res) => {
    res.end(
      `Will add the partner: ${req.body.name} with description: ${req.body.description}`
    );
  })

  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /partners");
  })

  .delete((req, res) => {
    res.end("Deleting all partners");
  });

module.exports = partnersRouter;
