connecting db with sequelize, every time that you update something in command line, will update on db

[SEQUELIZE]

Used to communicate with the Database, instead use some SQL language, you'll use the sequelize commands
all configs are setting in [./src/config/config.json] file

**Initialize Sequelize Creating Model**
execute this command in path: /src/
npx sequelize-cli model:create --name People --attributes name:string,active:boolean,email:string,role:string   

in this code you're passing the parameters to create a model with name People which will receive the followins attributes
and with the people.js inside models, it will be create a file inside [migrations] folder

[Migration]
In migration folder, it will keep all constraints of your DB

npx sequelize-cli db:migrate

execute this after you pass the infos in models and add columns on migration files
it will create a table with the respectives columns

after that you'll need to populate the table with [seed]

[Seed] - Creating
src % npx sequelize-cli seed:generate --name demo-person

Loading (populating)
npx sequelize-cli db:seed:all

[Undo]
Commnad to undo the latest migration
npx sequelize-cli db:migrate:undo{:all}
npx sequelize-cli db:seed:undo{:all}

MVC - [Model], [View], [Controller]

[Create_Table]
npx sequelize-cli model:create --name [Table_Name] --attributes [COLUMNS]:[TYPE] 

=-=-=-=-=
[Obs] - When you're using Sequelize, you need to use the old version of JavaScript, the commonJS (sequelize don't support ES6)
=-=-=-=-=

**To search on Database**

database.[TABLE_NAME].[METHOD]
database.People.findAll()
=-=-=-=-=

[ForeignKey]
To define that some table has foreigns keys, you need to pass the command below in the model file:

**People.hasMany(models.Classes, { foreignKey: teacher_id })**
Table which has the info: [People.]
association method: [.hasMany(...)]
arguments inside association method... (Foreign Key)
Table which will receive the infos: [models.Classes]
the type of info that will receive: [{foreignKey:teacher_id}]


=-=-=-=
**Notes**
const [{id}] = req.params
is the same thing which
[req.params.id], and you can acess by [id]
=-=-=-=
