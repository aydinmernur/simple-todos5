Recipes = new Meteor.Collection('recipes2')

RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  desc: {
    type: String,
    label: "Desciption"
  },
  author: {
    type: String,
    label: "Author",

    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "CreatedAt",
    autoValue: function() {
      return new Date()
    }
  }
});


Recipes.attachSchema( RecipeSchema );
