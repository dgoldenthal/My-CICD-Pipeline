import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    if (
      models[modelName] && 
      models[modelName].db && 
      models[modelName].db.db
    ) {
      let modelExists = await models[modelName].db.db.listCollections({
        name: collectionName
      }).toArray();

      if (modelExists.length) {
        await db.dropCollection(collectionName);
      }
    } else {
      console.error(`Error: models[${modelName}].db.db is undefined.`);
    }
  } catch (err) {
    console.error("Error in cleanDb:", err);
    throw err;
  }
};