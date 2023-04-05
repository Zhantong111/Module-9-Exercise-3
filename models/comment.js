const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const User = require("./user");
const Post = require("./post");

const sequelizeInstance = dbConnect.Sequelize;

class Comment extends Model {}

Comment.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: Post,
        key: "id",
      },
    },
    comment: { type: DataTypes.STRING, allowNull: false, required: true },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "comment",
    timestamps: true,
    freezeTableName: true,
  }
);

Comment.belongsTo(User);
Comment.belongsTo(Post);

module.exports = Comment;
