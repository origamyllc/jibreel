
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


  /*
   var obj={"username":"prashunj","password":"starhash","email":"javeri@domain.com"};

  mongo.insert("UsersSchema",obj);

   mongo.findAll("UsersSchema",function(docs){
     console.log(docs);
   });

   mongo.findOne("UsersSchema",{'email': 'javeri@domain.com'},function(doc){
   console.log(doc);
   });

   mongo.findWhere("UsersSchema",{'email': 'javeri@domain.com'},function(docs){
   console.log(docs);
   });

   mongo.findDistinct("UsersSchema",'_id',{'email': 'javeri@domain.com'},function(docs){
   console.log(docs);
   });

   mongo.count("UsersSchema",{'email': 'javeri@domain.com'},function(docs){
   console.log(docs);
   });

   mongo.getCollections();

  */


*/


  /**
   *
   var obj={'UID':'universal-id','deviceType':'nanchako','deviceName':'nanchakoo','deviceFullName':'nanchakoo','deviceModel':'basic-bitch','deviceIpVersion':4,'deviceBrand':'none','deviceIP':'127.0.0.0','deviceMAC':'mac adress','createdAt':'today'};

   sql.update("DeviceSchema",obj);

  sql.findAll("DeviceSchema",function(results){
    console.log(results)
  });

  sql.findWhere("DeviceSchema",{ 'deviceType' : 'nanchakoo'},function(results){
    console.log(results)
  });

  sql.findOne("DeviceSchema",{} ,function(results){
    console.log(results)
  });

   sql.count("DeviceSchema",{} ,function(results){
    console.log(results)
  });

*/

  // sql.delete("DeviceSchema",{});

// TO DO 1) CREATE A CONFIG FILE
//       2) CREATE A NODE REGISTRY {NAME:NAME,VALUE.ID}

var MESH = require('./Mesh/Graph/Core/mesh.graph.core.fascade').MESH;

      // MESH.createNode(mesh.config.user,undefined,PrashunJaveri)
      // MESH.createNode(mesh.config.user,undefined,ShrikantJaveri)
      // MESH.createNode(mesh.config.device,mesh.config.smoke_alarm,Smokey)
      // MESH.createNode(mesh.config.device,mesh.config.thermostat,Thermy-1)
      // MESH.createNode(mesh.config.device,mesh.config.thermostat,Thermy-2)

      //MESH.createEdge("mesh.config.user_fbba9b6bbda502234872d6e85fd621b3e035be75","owns","mesh.config.device_gyrYriEy3MZqp599WzPJmS6YRy25AOV2");
      //MESH.createEdge("mesh.config.user_e8fe41ccd3722f9b3c7c3e388a7f7fe65ccdb1b8","owns","mesh.config.device_gyrYriEy3MZqp599WzPJmS6YRy25AOV2");
      //MESH.createEdge("mesh.config.user_e8fe41ccd3722f9b3c7c3e388a7f7fe65ccdb1b8","owns","mesh.config.device_QmZneUlU51JK9kFL2l3C2kiOgegLSfQJ");
      //console.log(MESH.getAdjeacencyMatrix());
      //MESH.getAdjacentNodes('mesh.config.user_fbba9b6bbda502234872d6e85fd621b3e035be75')

