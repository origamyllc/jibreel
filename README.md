{"options":{"type":"device","UID":"universal-id","name":"spool","fullName":"mesh.device.spool","deviceType":"temperaturesensor","deviceName":"spool","deviceFullName":"mesh.device.spool","deviceModel":"spool-basic","deviceIpVersion":4,"deviceBrand":"none","deviceIP":"127.0.0.0","deviceMAC":"mac adress","createdAt":"today"}}

{"options":{ "type":"temperature","target_temperature_high_f": "60", "name":"temperature-sensor","fullName":"mesh.temperature","hvac_state": "cooling" }}

{"options":{"type":"collector", "fullName":"mesh.temperature.collector","name":"temperature-collector","urlHost":"www.google.com","urlPath":"/","pollInterval":1000}}

{"options":{"fromNode": "mesh.temperature", "relationship": "has-a","toNode": "mesh.temperature.collector" }}

{"options":{"fromNode": "mesh.device.spool", "relationship": "has-a","toNode": "mesh.temperature" }}
