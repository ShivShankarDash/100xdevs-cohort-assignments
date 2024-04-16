const SurveyModel = require('../models/surveyModel')
const express = require('express')
const app = express()
app.use(express.json())

class SurveyController {

    async getAllSurveys(req,res){
        try{
            const surveys = await SurveyModel.getAllSurveys();
            res.status(200).json(surveys);
            
        }catch(err){
            res.status(500).json({ message: err.message });
        }

    }

    async createSurvey(req,res){
        try{
            const newSurvey = await SurveyModel.createSurvey(req.body);
            res.status(200).json(newSurvey);
        }catch(err){
            res.status(500).json({message : err.message})
        }
    }

    async getSurveyById(req, res){
        try{
            const survey = await SurveyModel.getSurveyById(parseInt(req.params.id));
            res.status(200).json(survey);
        }catch(err){
            res.status(500).json({message : err.message})
        }
    }
   
    async updateSurvey(req, res) {
        try {
          const updatedSurvey = await SurveyModel.updateSurvey(parseInt(req.params.id), req.body);
          res.status(200).json(updatedSurvey);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }
    
      async deleteSurvey(req, res) {
        try {
          await SurveyModel.deleteSurvey(parseInt(req.params.id));
          res.status(200).json({ message: 'Survey deleted' });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }

}

module.exports = SurveyController