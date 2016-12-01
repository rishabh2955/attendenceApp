Meteor.methods({
  'endClass':function(){
    Seats.update({},{$set: {'status':'Available','users':null}},{multi:true});
  }
});
