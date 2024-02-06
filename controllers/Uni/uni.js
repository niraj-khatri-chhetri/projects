const Uni = require('../../models/Uni/uni');

exports.addUni = async (req, res, next) => {
  console.log('🚀 ~ exports.addUni= ~ req:', req);

  const {
    name,
    location,
    estimateCoa,
    admissionFee,
    courses,
    undergradReq,
    deadline,
    portal,
    rank,
    courseLink,
    wesEval,
    docRequired,
  } = req.body;

  const uni = new Uni({
    name,
    location,
    estimateCoa,
    admissionFee,
    courses,
    undergradReq,
    deadline,
    portal,
    rank,
    courseLink,
    wesEval,
    docRequired,
  });

  const result = await uni.save();

  if (result) {
    console.log('Uni added', result);
  } else {
    console.log('Not added');
  }
};

exports.getUni = (req, res, next) => {
  res.render('admin/edit-uni', {
    pageTitle: 'Add Uni',
    path: '/uni/add-uni',
    editing: false,
    hasError: false,
    errorMessage: null,
    validationErrors: [],
  });
};
