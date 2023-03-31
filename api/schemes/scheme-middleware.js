const model = require('./scheme-model');


/*
  Eğer `scheme_id` veritabanında yoksa:

  durum 404
  {
    "message": "scheme_id <gerçek id> id li şema bulunamadı"
  }
*/
const checkSchemeId = async (req, res, next) => {
try {
  const isExistScheme = await model.findById(req.params.scheme_id);
  if(!isExistScheme){
    res.status(404).json({message: `scheme_id ${req.params.scheme_id} id li sema bulunamadi`})
  } else{
    next();
  }
} catch (error) {
  next(error);
}
}

/*
  Eğer `scheme_name` yoksa, boş string ya da string değil:

  durum 400
  {
    "message": "Geçersiz scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
try {
  const {scheme_name} = req.body;
  if(!scheme_name){
    res.status(400).json({message: 'Gecersiz sheme_name'})
  } else {
    next();
  }
} catch (error) {
  next(error);
}
}

/*
  Eğer `instructions` yoksa, boş string yada string değilse, ya da
  eğer `step_number` sayı değilse ya da birden küçükse:

  durum 400
  {
    "message": "Hatalı step"
  }
*/
const validateStep = (req, res, next) => {
try {
  const {instructions, step_number} = req.body;
  if(instructions === undefined || typeof(instructions) !== 'string' || step_number === undefined || typeof(step_number) !== 'number'){
    res.status(400).json({message: 'Hatali step'})
  } else {
    next();
  }
} catch (error) {
  next(error)
}
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
