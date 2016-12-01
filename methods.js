Meteor.methods({
  'endClass':function(){
    Seats.update({},{$set: {'status':'Available','user':null}},{multi:true});
  }
});
