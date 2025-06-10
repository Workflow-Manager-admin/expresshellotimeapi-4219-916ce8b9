const express = require('express');
const healthController = require('../controllers/health');
const helloTimeController = require('../controllers/helloTime');

const router = express.Router();
// Health endpoint

/**
 * @swagger
 * /:
 *   get:
 *     summary: Health endpoint
 *     responses:
 *       200:
 *         description: Service health check passed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 message:
 *                   type: string
 *                   example: Service is healthy
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 environment:
 *                   type: string
 *                   example: development
 */
router.get('/', healthController.check.bind(healthController));

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Returns a welcome message
 *     responses:
 *       200:
 *         description: Welcome message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Welcome to my first API!
 */
router.get('/hello', helloTimeController.sayHello);

/**
 * @swagger
 * /time:
 *   get:
 *     summary: Returns the current server time
 *     responses:
 *       200:
 *         description: Current time
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 time:
 *                   type: string
 *                   format: date-time
 *                   example: 2023-01-01T12:00:00.000Z
 */
router.get('/time', helloTimeController.getTime);

module.exports = router;
