{"options":{"type":"device","UID":"universal-id","name":"spool","fullName":"mesh.device.spool","deviceType":"temperaturesensor","deviceName":"spool","deviceFullName":"mesh.device.spool","deviceModel":"spool-basic","deviceIpVersion":4,"deviceBrand":"none","deviceIP":"127.0.0.0","deviceMAC":"mac adress","createdAt":"today"}}

{"options":{"type":"control","name":"temperature-control","fullName":"mesh.control.temperature"}}

{"options":{ "type":"temperature","target_temperature_high_f": "60", "name":"temperature-sensor","fullName":"mesh.temperature","hvac_state": "cooling" }}

{"options":{"type":"collector", "fullName":"mesh.temperature.collector","name":"temperature-collector","urlHost":"localhost","urlPath":"/mesh/simulate/temperature","pollInterval":1000,"urlPort":3000}}



{"options":{"fromNode": "mesh.device.spool", "relationship": "has-a","toNode": "mesh.temperature" }}

{"options":{"fromNode": "mesh.device.spool", "relationship": "has-a","toNode": "mesh.temperature.collector" }}

{"options":{"fromNode": "mesh.temperature", "relationship": "has-a","toNode": "mesh.control.temperature" }}

{"options":{"fromNode": "mesh.temperature.collector", "relationship": "has-a","toNode": "mesh.control.temperature" }}

// {"options":{"fromNode": "mesh.control.temperature", "relationship": "has-a","toNode": "mesh.comparator" }}

// {"options":{"fromNode": "mesh.control.temperature", "relationship": "has-a","toNode": "mesh.commute.rabbitmq" }}
