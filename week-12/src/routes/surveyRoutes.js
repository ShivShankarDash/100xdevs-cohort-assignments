const express  = require('express');
const router = express.Router()
const SurveyController = require('../controllers/surveyController')
const surveyController = new SurveyController()

router.get('/', surveyController.getAllSurveys)
router.post('/', surveyController.createSurvey);
router.get('/:id', surveyController.getSurveyById);
router.put('/:id', surveyController.updateSurvey);
router.delete('/:id', surveyController.deleteSurvey);


module.exports = router