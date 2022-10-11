let restaurant = {
    name:"abs",
    guestcapacity: 72,
    guestcount: 0,
    checkavailability:function(partysize){
        let seatleft = this.guestcapacity - this.guestcount
        return seatleft>=partysize
    },
    seatparty: function(partysize){
        this.guestcount = this.guestcount + partysize
    },
    removeparty: function(partysize){
        this.guestcount = this.guestcount - partysize
    }

}
restaurant.seatparty(70)
console.log(restaurant.checkavailability(20))
restaurant.removeparty(15)
console.log(restaurant.checkavailability(10))