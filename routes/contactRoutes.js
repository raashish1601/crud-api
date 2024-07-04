const express = require("express");
const { getContacts,
getContact,
updateContact,
createContact,
deleteContact } = require("../controllers/contactController");

const router = express.Router();

router.route("/").get(getContacts);
router.route("/:id").get(getContact);
router.route("/").post(createContact);
router.route("/").put(updateContact);
router.route("/").delete(deleteContact);

module.exports = router;