/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "z0f9ejb8blf82ds",
    "created": "2023-10-24 09:20:14.643Z",
    "updated": "2023-10-24 09:20:14.643Z",
    "name": "branche",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vvm5ffgk",
        "name": "libelle_branche",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mhrkwynl",
        "name": "couleur_branche",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "sd5ec019hvnsf4x",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("z0f9ejb8blf82ds");

  return dao.deleteCollection(collection);
})
