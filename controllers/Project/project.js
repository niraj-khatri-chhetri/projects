const Project = require('../../models/Project/project');

exports.getProjectForm = async (req, res, next) => {
  
  return res.render('project-management/index', {
    pageTitle: 'Projects',
  });
};

// exports.createProject = async (req, res, next) => {
//   const { title, category } = req.body;
//   console.log('🚀 ~ file: project.js:11 ~ exports.createProject= ~ req:', req);

//   try {
//     const project = new Project({
//       title,
//       category,
//     });

//     const savedProject = await project.save();
//     console.log(
//       '🚀 ~ file: project.js:20 ~ exports.createProject= ~ savedProject:',
//       savedProject
//     );
//     return res.json(savedProject);
//   } catch (error) {
//     console.log(error);
//   }
// };

exports.createProject = async (req, res, next) => {
  const title = req.body.title;
  const category = req.body.category;
  const project = new Project({
    title,
    category,
  });

  const savedProject = await project.save({
    title: title,
    category: category,
  });
  console.log(
    '🚀 ~ file: project.js:42 ~ exports.ccreateProject= ~ savedProject:',
    savedProject
  );

  return res.json(savedProject);
};
