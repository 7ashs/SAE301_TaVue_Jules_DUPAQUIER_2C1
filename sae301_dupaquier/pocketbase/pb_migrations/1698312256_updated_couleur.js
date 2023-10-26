/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sd5ec019hvnsf4x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0lult2ma",
    "name": "hex_couleur",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sd5ec019hvnsf4x")

  // remove
  collection.schema.removeField("0lult2ma")

  return dao.saveCollection(collection)
})
