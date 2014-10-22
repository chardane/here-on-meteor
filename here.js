Events = new Meteor.Collection('events')
Attendees = new Meteor.Collection('attendees')

//run this if clause on the client
if (Meteor.isClient) {

  // EventsListView template
  Template.eventslistview.event = function() { //returns all the events
    return Events.find()
  }

  Template.eventslistview.selectedEvent = function(){ //gets called to change the bg of a selected event
    var selectedEvent = Session.get('selectedEvent')
    var eventId = this._id
    if (selectedEvent == eventId) {
      return 'selected'
    }
      
  }
  Template.attendeeslistview.attendee = function() {
    return Attendees.find()
  }

  //addAtendeeNameForm template
  Template.addAttendeeNameForm.events({
    'submit form': function(theEvent, theTemplate){
      theEvent.preventDefault()
      var attendeeNameVar = theTemplate.find('#attendeeName').value
      Attendees.insert ({
        name: attendeeNameVar
      })
      console.log(attendeeNameVar)
    }
  })



  Template.eventslistview.events({
    'click li': function() {   //when clicked, call selectedEvent
      Session.set('selectedEvent', this._id)   
      var selectedEvent = Session.get('selectedEvent')
      console.log(selectedEvent)
    }
  })

  
} //end client

//run this if-clause on the server
if (Meteor.isServer) {
 
} //end server

