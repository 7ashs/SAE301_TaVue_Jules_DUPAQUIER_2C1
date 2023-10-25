/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sd5ec019hvnsf4x",
    "created": "2023-10-24 09:20:14.643Z",
    "updated": "2023-10-24 09:20:14.643Z",
    "name": "couleur",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ktj70rbl",
        "name": "libelle_couleur",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sd5ec019hvnsf4x");

  return dao.deleteCollection(collection);
})
