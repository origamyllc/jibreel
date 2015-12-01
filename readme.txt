
/**
EXAMPLE CONFIG

{
create:[
  prashunjaveri:{
     owns:{
        smokealarm:{
           name:name,
           meta:meta,
           location:{}
           rule:{
               1) on recieving an alert message on a rabbitmq(commute node)
               it creates an alert component
               distributes the alert component

           },
           datasoruce:{
               commute node connected to rabbitmq in listner mode
           },
           ui-component:{}
        },
        thermostat:{
           name:name,
           meta:meta,
           location:{}
           rule:{
               1)  should get a stream of data
               2)  should be within a given band of temp
               3)  if outside of the band reset to ambient
           },
           datasoruce:{
               commutenode connected to rabbitmq in streming  mode
           },
          ui-component:{}
        }
     },
     interactions:{
        when the tempature of the thermostat goes above 100 degree celcius and the smoke detector goes off
           1) call the fire department
           2) send alert
       }
    }
  ],
}



