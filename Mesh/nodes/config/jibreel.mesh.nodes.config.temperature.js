module.exports=function(options) {

  var thermostatConfigurationNode = function (options) {
  }

  thermostatConfigurationNode.prototype = function (options) {
      this.is_online = false;
      this.can_cool = false;
      this.can_heat = false;
      this.is_using_emergency_heat = true,
      this.has_fan = true,
      this.fan_timer_active = true,
      this.fan_timer_timeout = null,
      this.has_leaf = true;
      this.temperature_scale = options.scale || "C",
      this.target_temperature_f = parseInt(options.target_temperature_f) || 0 ,
      this.target_temperature_c = parseInt(options.target_temperature_c) || 0 ,
      this.target_temperature_high_f = parseInt(options.target_temperature_high_f) || 0 ,
      this.target_temperature_high_c = parseInt(options.target_temperature_high_c) || 0 ,
      this.target_temperature_low_f = parseInt(options.target_temperature_low_f) || 0 ,
      this.target_temperature_low_c = parseInt(options.target_temperature_low_c) || 0 ,
      this.away_temperature_high_f = parseInt(options.away_temperature_high_f) || 0 ,
      this.away_temperature_high_c = parseInt(options.away_temperature_high_c) || 0 ,
      this.away_temperature_low_f = parseInt(options.away_temperature_low_f) || 0 ,
      this.away_temperature_low_c = parseInt(options.away_temperature_low_c) || 0 ,
      this.hvac_mode = options.hvac_mode || "heat",
      this.ambient_temperature_f = parseInt(options.ambient_temperature_f) || 0 ,
      this.ambient_temperature_c = parseInt(options.ambient_temperature_f) || 0 ,
      this.humidity = parseInt(options.humidity) || 0 ,
      this.hvac_state = options.hvac_state || "heating"
  }

  return thermostatConfigurationNode;
}
/**
 * Created by prashun on 11/17/15.
 */
