import Sequelize from 'sequelize';

const sequelize = new Sequelize('test_graphql_db', 'olivia', 'olivia@company.com', {
    host: 'localhost',
    dialect: 'sqlite', 
});

const db = {
    User: sequelize.import('./user'),
};

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;