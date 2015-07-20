// Use Meteor Toys Session instead of regular Session
// to avoid polluting the Sessoin namespace
mtSession =  Package["meteortoys:toykit"].MeteorToysDict;

mtSession.set("Mongol_SDK_text", "Anything goes here!");

Template.MongolKitBody_SDK.helpers({
	'text': function() {
		return mtSession.get("Mongol_SDK_text")
	}
});

Template.MongolKitMenu_SDK.events({
	'click .Mongol_extension_menuButton': function () {
		alert("Ouch! It hurts when you touch me there!");
	}
});;